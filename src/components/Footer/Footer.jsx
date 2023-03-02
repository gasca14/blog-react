import '../Footer/Footer.css'
function Footer() {
    return (

        <footer className="pie-pagina">
            <div>
                <h3>Nosotros</h3>
                <ul>
                    <li>
                        <a href="#">A cerca de</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Servicio al cliente</h3>
                <ul>
                    <li>
                        <a href="#">Contactanos</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Siguenos</h3>
                <div className="red-social">
                    <a className="boton-e" href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                        <i className="fa-brands fa-facebook" />
                        <p>Facebook</p>
                    </a>
                    <a className="boton-e" href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'>
                        <i className="fa-brands fa-instagram" />
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
            <div className="derechos">
                <p>© 2023 Ipar bethel. Todos los derechos reservados. </p>
            </div>
        </footer>

    );
}

export default Footer;