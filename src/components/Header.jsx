function Header () {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img src="/img/logo.png" alt="logo" width={40} height={40}/>
                <div className="headerInfo">
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img src="/img/card.svg" alt="logo" width={20} height={20}/>
                    <span>1205 грн.</span>
                </li>
                <li className="mr-15">
                    <img src="/img/fav.svg" alt="logo" width={20} height={20}/>
                </li>
                <li>
                    <img src="/img/user.svg" alt="logo" width={20} height={20}/>
                </li>
            </ul>
        </header>
    )
}

export default Header