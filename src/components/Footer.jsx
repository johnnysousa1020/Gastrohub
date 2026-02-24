import "./Footer.css"

function Footer(){
    return(
    <footer className="footer">
        <div className="footer-container">

            <div className="footer-section">
                <h2 className="footer-logo">
                    Restaurante<span>Prime</span>
                </h2>
                <p>
                    Experiência gastronômica premium com sabores
                    sofisticados e ambiente acolhedor.
                </p>
            </div>

            <div className="footer-section">
                <h3>Contato</h3>
                <p>Rua: São Paulo, 123</p>
                <p>(11) 99999-9999</p>
                <p>contato@restauranteprime.com</p>
            </div>

            <div className="footer-section">
                <h3>Hórario</h3>
                <p>Seg - Sex: 18h às 23h</p>
                <p>Sáb - Dom: 18h às 00h</p>
            </div>
        </div>

        <div className="footer-bottom">
            {new Date().getFullYear()} RestaurantePrime.
            Todos os direitos reservados.
        </div>
    </footer>
    )
}

export default Footer;