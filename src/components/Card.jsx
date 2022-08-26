function Card () {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/fav-unliked.svg" alt="Unliked"/>
            </div>
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
    )
}

export default Card