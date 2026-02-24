import { useState } from "react"
import "./Header.css"
import { Link, NavLink } from "react-router-dom"

function Header({ cartItems }){
    const [menuOpen, setMenuOpen] = useState(false)

    const totalItems = cartItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    return(
        <header className="header">
        <div className="header-container">
            <Link to="/" className="logo">
              Gastro<span>Hub</span>
            </Link>

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <NavLink to="/" end>Inicio</NavLink>
                <NavLink to="/#cardapio">Cardápio</NavLink>
                <NavLink to="/admin">Reservas</NavLink>
            </nav>

            <div className="actions">
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <Link to="./menu" className="btn-menu">
                  Ver Cardápio
                </Link>
                          
                <Link to="/carrinho" className="cart">
                 🛒
                 <span className="cart-cout">{totalItems}</span>
                </Link>
            </div>
        </div>
        </header>
    )
}

export default Header;