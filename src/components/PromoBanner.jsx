import "./PromoBanner.css"
import { useNavigate } from "react-router-dom";
import promoimage from "../assets/promo.jpg"

function PromoBanner(){
    const navigate = useNavigate()

    return(
        <section className="promo-banner" style={{ backgroundImage: `url(${promoimage})`}}>
            <div className="promo-content">
                <h2>Experiência Gastronômica Premium</h2>
                <p>
                    Sabores sofisticados, ingredientes selecionados e
                    uma noite inesquecível.
                </p>
                <button onClick={() => navigate("/reserva")}>Reservar Agora</button>
            </div>
        </section>
    )
}

export default PromoBanner;