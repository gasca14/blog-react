function Footer() {
    return (

        <footer className="pie-pagina">
            <div>
                <h3>Nosotros</h3>
                <ul>
                    <li>
                        <a href="#">A cerca de</a>
                    </li>
                    <li>
                        <a href="#">Sucursales</a>
                    </li>
                    <li>
                        <a href="#">Promociones en sucursales</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Servicio al cliente</h3>
                <ul>
                    <li>
                        <a href="#">Contactanos</a>
                    </li>
                    <li>
                        <a href="#">Preguntas frecuentes</a>
                    </li>
                    <li>
                        <a href="#">Catalogos</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Legales</h3>
                <ul>
                    <li>
                        <a href="#">Terminos y condiciones</a>
                    </li>
                    <li>
                        <a href="#">Aviso de privacidad</a>
                    </li>
                    <li>
                        <a href="#">Politica de reembolso</a>
                    </li>
                    <li>
                        <a href="#">Codigo de etica de Loredo</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Siguenos</h3>
                <div className="red-social">
                    <a className="boton-e" href="#">
                        <i className="fa-brands fa-facebook" />
                        <p>Facebook</p>
                    </a>
                    <a className="boton-e" href="#">
                        <i className="fa-brands fa-whatsapp" />
                        <p>Whatsapp</p>
                    </a>
                    <a className="boton-e" href="#">
                        <i className="fa-brands fa-instagram" />
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
            <div className="derechos">
                <p>© 2022 Gasca. Todos los derechos reservados. </p>
            </div>
        </footer>

    );
}

export default Footer;