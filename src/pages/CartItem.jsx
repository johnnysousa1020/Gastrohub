import "./CartItem.css"

function CartItem({ item, removeFromCard, updateQuantity }){

    return(
        <div className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
                <h4>{item.name}</h4>
                <span>R$ {item.price.toFixed(2)}</span>
            </div>

            <div className="cart-actions">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>

            <button className="remove-btn" onClick={() => removeFromCard(item.id)}>X</button>
        </div>
    )
}

export default CartItem;