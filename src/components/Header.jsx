import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";


function Header (props) {
    const {totalPrice} = useCart();

    return (
        <header className="d-flex justify-between align-center ">
            <Link to="/">
                <div className="d-flex align-center">
                        <img src="img/logo.png" alt="logo" width={40} height={40}/>
                        <div className="headerInfo">
                            <h3 className="text-uppercase">BM sneakers</h3>
                            <p>Магазин найкращих кросівок</p>
                        </div>
                </div>
            </Link>

            <ul className="d-flex">
                <li className="cartHeader cu-p" onClick={props.onOpenCart}>
                    <img src="img/card.svg" alt="logo" width={20} height={20}/>
                    <span>{totalPrice} грн.</span>
                </li>
                <li className="mr-15">
                    <Link to="/favorite">
                        <img src="img/fav.svg" alt="logo" width={20} height={20}/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img src="img/user.svg" alt="logo" width={20} height={20}/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header