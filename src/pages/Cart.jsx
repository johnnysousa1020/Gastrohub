import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CartItem from "./CartItem"
import "./Cart.css"

function Cart({ cartItems = [], removeFromCard, updateQuantity, clearCart }){
    const [showModal, setShoeModal] = useState(false)
    const navigate = useNavigate()

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    function handleConfirmOrder(){
        clearCart()
        setShoeModal(false)
        navigate("/")
    }

    return(
        <section className="cartst">
            <h2>Seu Pedido</h2>

            {cartItems.length === 0 ? (
                <p className="empty-cart">Seu carrinho está vazio</p>
            ) : (
                <>
                 <div className="cart-items">
                    {cartItems.map(item => (
                        <CartItem 
                        key={item.id}
                        item={item}
                        removeFromCard={removeFromCard}
                        updateQuantity={updateQuantity}/>
                    ))}
                 </div>

                 <div className="cart-summary">
                    <span>Total</span>
                    <strong>R$ {total.toFixed(2)}</strong>
                 </div>

                 <button className="checkout-btn" onClick={() => setShoeModal(true)}>
                    Finalizar Pedido
                 </button>
                </>
            )}

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Confirmar Pedido</h3>
                        <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
                        <div className="modal-buttons">
                            <button className="cancel-btn" onClick={() => setShoeModal(false)}>
                                Cancelar
                            </button>

                            <button className="confirm-btn" onClick={handleConfirmOrder}>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Cart;