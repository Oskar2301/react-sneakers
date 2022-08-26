export function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
         <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Корзина <img src="/img/btn-removed.svg" alt="Remove" className="removeBtn cu-p"/></h2>

            <div className="Items flex">
                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/Sneakers/1.jpg)'}} className="cartItemImage"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 грн.</b>
                    </div>
                    <img src="/img/btn-removed.svg" alt="Remove" className="removeBtn"/>
                </div>

                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/Sneakers/1.jpg)'}} className="cartItemImage"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 грн.</b>
                    </div>
                    <img src="/img/btn-removed.svg" alt="Remove" className="removeBtn"/>
                </div>

            </div>
            <div className="cartTotalBlock">
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 490 грн.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1000 грн.</b>
                    </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
            </div>
        </div>
        </div>
    )
}