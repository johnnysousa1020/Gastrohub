import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./Header.css"
import { Link, NavLink } from "react-router-dom"

function Header({ cartItems }){
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const totalItems = cartItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    function handleScrollToMenu(){
        if(location.pathname !== "/"){
            navigate("/");
            setTimeout(() => {
                const section = document.getElementById("cardapio")
                section?.scrollIntoView({ behavior: "smooth" })
            }, 100)
        }else{
            const section = document.getElementById("cardapio")
            section ?.scrollIntoView({ behavior: "smooth" })
        }
    }

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

                <Link onClick={handleScrollToMenu} className="btn-menu">
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