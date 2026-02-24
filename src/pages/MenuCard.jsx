import "./MenuCard.css"

function MenuCard({ item, addToCart }){

    return(
        <div className="menu-card">
            <div className="menu-card-image">
                <img src={item.image} alt={item.name} />
            </div>

            <div className="menu-card-content">
                <h3>{item.name}</h3>

                <p className="menu-description">
                    {item.description}
                </p>

                <div className="menu-card-footer">
                    <span className="menu-price">
                        R$ {item.price.toFixed(2)}
                    </span>

                    <button className="menu-button" onClick={() => addToCart(item)}>
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;