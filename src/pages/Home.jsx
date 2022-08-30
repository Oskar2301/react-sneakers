import Card from "../components/Card";

export function Home ({items, setSearchValue, searchValue, onChangeSearch, onFavorite, onAddToCart, isLoading}) {

    const renderItems = () => {
        const filterItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

       return (
           isLoading
            ? [...Array(8)]
            : filterItems)
            .map((item, index) => (
                <Card
                    key={index}
                    onClickFav={(obj) => onFavorite(obj)}
                    onClickPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                    {...item}
                />
            ))
    }

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="search"/>
                    {searchValue && <img onClick={() => setSearchValue('')} src="img/btn-removed.svg" alt="Clear" className="cu-p clear"/> }
                    <input type="text" placeholder="Поиск..." value={searchValue} onChange={onChangeSearch}/>
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {renderItems()}
            </div>
        </div>
    )
}