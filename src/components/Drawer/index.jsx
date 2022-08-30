import {Info} from "../Info";
import { useState} from "react";
import axios from "axios";
import {useCart} from "../../hooks/useCart";

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function Drawer({onClose, onRemove, items = [], opened}) {
    const { cartItems, setCartItems, totalPrice} = useCart();

    const [isComplete, setIsComplete] = useState(false);
    const [orderId , setOrederId] = useState(null);
    const [isLoading , setIsLoading] = useState(false);

    const handleClickComplete = async () => {
        try{
            setIsLoading(true)
            const {data} = await axios.post('https://630b52f1f280658a59d991fa.mockapi.io/orders', {
                items: cartItems,
            });

            setOrederId(data.id);
            setIsComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://630b52f1f280658a59d991fa.mockapi.io/cart/' + item.id)
                await delay(1000);
            }

        }catch (e) {
            alert("Не удалось создать запрос :(")
        }
        setIsLoading(false)
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="mb-30 d-flex justify-between">Корзина <img src="/img/btn-removed.svg" alt="Close"
                                                                          onClick={onClose} className="removeBtn cu-p"/>
                </h2>
                {
                    items.length > 0 ? (
                            <>
                                <div className={`${styles.Items} flex`}>
                                    {items.map(obj => (
                                        <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                            <div style={{backgroundImage: `url(${obj.img})`}}
                                                 className="cartItemImage"></div>
                                            <div className="mr-20 flex">
                                                <p className="mb-5">{obj.title}</p>
                                                <b>{obj.price} грн.</b>
                                            </div>
                                            <img src="/img/btn-removed.svg" alt="Remove" className="removeBtn"
                                                 onClick={() => onRemove(obj.id)}/>
                                        </div>
                                    ))}
                                </div>
                                <div className="cartTotalBlock">
                                    <ul>
                                        <li>
                                            <span>Итого:</span>
                                            <div></div>
                                            <b>{totalPrice} грн.</b>
                                        </li>
                                        <li>
                                            <span>Налог 5%:</span>
                                            <div></div>
                                            <b>{(totalPrice / 100 * 5).toFixed(2)} грн.</b>
                                        </li>
                                    </ul>
                                    <button disabled={isLoading} className='greenButton' onClick={handleClickComplete}>Оформить заказ <img src="/img/arrow.svg" alt="arrow"/>
                                    </button>
                                </div>
                            </>
                        )
                        : (
                            <Info
                                title={isComplete ? "Заказ оформлен!" : 'Корзина пустая'}
                                description={isComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                                image={isComplete ? '/img/order-complete.jpg' : '/img/empty-cart.png'}
                            />
                          )
                }

            </div>
        </div>
    )
}