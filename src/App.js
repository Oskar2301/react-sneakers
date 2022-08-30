import Header from "./components/Header";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";
import {Orders} from "./pages/Orders";
import {Drawer} from "./components/Drawer";

export const AppContext = createContext({});

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCardOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect( () => {
       async function fetchDate() {
          try{
              const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all([
                  axios.get('https://630b52f1f280658a59d991fa.mockapi.io/cart'),
                  axios.get('https://630b52f1f280658a59d991fa.mockapi.io/favorites'),
                  axios.get('https://630b52f1f280658a59d991fa.mockapi.io/items')
              ]);

              setIsLoading (false);
              setCartItems(cartResponse.data);
              setFavorites(favoriteResponse.data);
              setItems(itemsResponse.data);
          } catch (e) {
              alert('Error request')
          }
       }

        fetchDate()
    }, []);

    const onAddToCart = async (obj) => {
        try{
            const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))
            if(findItem) {
                setCartItems(prev => prev.filter(item => Number(item.parentId !== Number(obj.id))))
                await axios.delete(`https://630b52f1f280658a59d991fa.mockapi.io/cart/${findItem.id}`);
            } else {
                setCartItems(prev => [...prev, obj]);
                const {data} = await axios.post('https://630b52f1f280658a59d991fa.mockapi.io/cart', obj);
                setCartItems(prev => prev.map(item =>{
                    if(item.parentId === data.parentId) {
                        return {
                            ...item, id: data.id
                        }
                    }
                    return item;
                }));
            }
        } catch (e) {
            alert('Error cart')
        }

    }

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://630b52f1f280658a59d991fa.mockapi.io/cart/${id}`);
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
        } catch (e) {
            alert('Error RemoveItem')
        }
    }

    const onFavorite = async(obj) => {
        try {
            if(favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://630b52f1f280658a59d991fa.mockapi.io/favorites/${obj.id}`);
                setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
            } else {
                const { data } = await axios.post('https://630b52f1f280658a59d991fa.mockapi.io/favorites', obj);
                setFavorites(prev => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в фавориты')
        }
    }

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value);
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.parentId) === Number(id))
    }

  return (
      <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onFavorite, setCardOpened, setCartItems, onAddToCart}}>
            <div className="wrapper clear">
                <Drawer onClose={() => setCardOpened(false)} items={cartItems} onRemove={onRemoveItem} opened={cartOpened}/>
                <Header onOpenCart={() => setCardOpened(true)}/>
                <Routes>
                    <Route path="" element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearch={onChangeSearch}
                            onFavorite={onFavorite}
                            onAddToCart={onAddToCart}
                            cartItems={cartItems}
                            isLoading={isLoading}
                        />
                    }/>
                    <Route path="favorite" element={<Favorites />}/>
                    <Route path="orders" element={<Orders />}/>
                </Routes>
            </div>
      </AppContext.Provider>

  );
}

export default App;
