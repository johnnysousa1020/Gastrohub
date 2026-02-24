import { useNavigate } from "react-router-dom";
import "./Banner.css"

function Banner(){
    const navigate = useNavigate()

    return(
        <section className="banner">
            <div className="banner-overlay"></div>

            <div className="banner-content">
                <h1>GastroHub</h1>
                <p>Uma experiência gastronômica completa</p>

                <div className="banner-buttons">
                    <button className="btn-primary">Ver Cardápio</button>
                    <button className="btn-outline" onClick={() => navigate("/reserva")}>Reservar Mesa</button>
                </div>
            </div>
        </section>
    )
}

export default Banner;