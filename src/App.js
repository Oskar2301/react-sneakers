function App() {
  return (
    <div className="wrapper clear">
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

        <div className="content p-40">

            <h1 className="mb-40">Все кроссовки</h1>

            <div className="d-flex">
                <div className="card">
                    <img width={133} height={112} src="/img/Sneakers/1.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 грн.</b>
                        </div>
                        <button className="button">
                            <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/Sneakers/2.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 грн.</b>
                        </div>
                        <button className="button">
                            <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/Sneakers/3.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 грн.</b>
                        </div>
                        <button className="button">
                            <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/Sneakers/4.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 грн.</b>
                        </div>
                        <button className="button">
                            <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
