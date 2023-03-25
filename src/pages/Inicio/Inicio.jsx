import '../Inicio/Inicio.css'
import { Link, NavLink } from 'react-router-dom';
const Inicio = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-inner">
                    <h2>Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí. Juan 14:6</h2>
                    <Link to={"/galeria"} className='btn btn-outline-success btn-lg '>Galeria</Link>
                </div>
            </div>
            <main className="container mt-4">
                {/* <div className="row">
                    <div className="col-6">
                        <div className="card mb-3" style={{ maxWidth: 580 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img id='iglesia' src="https://www.elsoldetampico.com.mx/incoming/ogxshq-whatsapp-image-2018-11-11-at-18.07.18.jpeg/ALTERNATES/LANDSCAPE_1140/WhatsApp%20Image%202018-11-11%20at%2018.07.18.jpeg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Evento</h5>
                                        <div className="mb-1 text-muted">Abril 8 de 2023</div>
                                        <p className="card-text"> Se les invita a hermanas en cristo a asistir a un evento el cual se estara llevando en la ciudad de tampico</p>
                                        <Link className='btn btn-primary' to='/construccion'>Ver mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mb-3" style={{ maxWidth: 580 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img id='iglesia' src="https://www.elsoldetampico.com.mx/incoming/ogxshq-whatsapp-image-2018-11-11-at-18.07.18.jpeg/ALTERNATES/LANDSCAPE_1140/WhatsApp%20Image%202018-11-11%20at%2018.07.18.jpeg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Evento</h5>
                                        <div className="mb-1 text-muted">Abril 8 de 2023</div>
                                        <p className="card-text"> Se les invita a hermanas en cristo a asistir a un evento el cual se estara llevando en la ciudad de tampico</p>
                                        <Link className='btn btn-primary' to='/construccion'>Ver mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="row g-5 mt-5">
                    <div className="col-md-8">
                        <Link id='history' className="pb-4 mb-4 fst-italic border-bottom list-unstyled" to='/historia'>Historia de la iglesia asociada reformada</Link>
                        <article className="blog-post mt-5">
                            <h2 className="blog-post-title mb-1">Jerusalén nombrada uno de los «mejores lugares del mundo» para visitar</h2>
                            <p className="blog-post-meta">
                                Marzo 24, 2023
                            </p>
                            <p>
                            Uno de los mejores lugares del mundo para visitar es la Torre de David, una ciudadela histórica en Jerusalén que está cerca de la entrada de la Puerta de Jaffa, asi fue nombrada por la revista TIME.
                            </p>
                            <a href="https://www.bibliatodo.com/NoticiasCristianas/jerusalen-nombrada-uno-de-los-mejores-lugares-del-mundo-para-visitar/" target='_blank' rel='noopener noreferrer'>Leer mas...</a>
                        </article>
                        <article className="blog-post mt-5">
                            <h2 className="blog-post-title mb-1">Benjamin Netanyahu: «No se aprobará ninguna ley contra la comunidad cristiana»</h2>
                            <p className="blog-post-meta">
                                Marzo 23, 2023
                            </p>
                            <p>
                                Luego de que se hiciera viral que estarían promoviendo una ley que prohibiría la predicación del evangelio en Israel, el primer ministro del país expresó que no permitiría ningún tipo de acción en contra de los cristianos.
                            </p>
                            <hr />
                            <p>
                                Por medio de Twitter, el primer ministro israelí Benjamin Netanyahu, expresó que el gobierno que ha conformado no promoverán leyes o acciones en contra de los cristianos, disipando así los temores de los creyentes dentro y fuera de Tierra Santa.
                            </p>
                            <hr />
                            <p>
                                «No promoveremos ninguna ley contra la comunidad cristiana», escribió en hebreo e inglés sobre el proyecto de ley propuesto por dos miembros del gobierno de coalición.
                            </p>
                            <a href="https://www.bibliatodo.com/NoticiasCristianas/benjamin-netanyahu-no-se-aprobara-ninguna-ley-contra-la-comunidad-cristiana1/" target='_blank' rel='noopener noreferrer'>Leer mas...</a>
                        </article>
                        <article className="blog-post">
                            <h2 className="blog-post-title mb-1">Vaquillas rojas para el sacrificio en el Tercer Templo pronto llegarán a la mayoría de edad</h2>
                            <p className="blog-post-meta">
                                {/* December 23, 2020 by <a href="#">Jacob</a>P */}
                            </p>
                            <p>
                                Esta podría ser la primera ceremonia mencionada en la Biblia con una vaquilla roja en 2000 años. "Tenemos al sacerdote, tenemos la vaquilla roja y tenemos el lugar para la ceremonia. "Tenemos todo listo", dijo un rabino israelí.
                            </p>
                            <p>
                                Las vaquillas rojas son vistas por muchos judíos y cristianos como uno de los elementos que podrían conducir a la construcción del Tercer Templo en Israel, mientras los sacerdotes se preparan para reanudar las ceremonias descritas en el Antiguo Testamento.
                            </p>
                            <a href="https://www.acontecercristiano.net/2023/03/vaquillas-rojas-para-el-tercer-templo.html" target='_blank' rel='noopener noreferrer'>Leer mas...</a>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <div className="position-sticky" style={{ top: "2rem" }}>
                            <div className="p-4 mb-3 bg-light rounded">
                                <h4 className="fst-italic">Acerca de</h4>
                                <p className="mb-0">
                                    ¡Bienvenidos, Dios les bendiga!
                                </p>
                                <p>
                                    En nuestra página encontraras información de interes acerca de eventos, asi como material importante que puedes consultar y descargar.
                                </p>
                            </div>
                            <div className="p-4">
                                <h4 className="fst-italic">Actividades</h4>
                                <ol className="list-unstyled mb-0">
                                    <li>
                                        <NavLink href="#">Marzo 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Abril 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Mayo 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Junio 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Julio 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Agosto 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Septiembre 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Octubre 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Noviembre 2023</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Diciembre 2023</NavLink>
                                    </li>
                                </ol>
                            </div>
                            {/* <div className="p-4">
                                <h4 className="fst-italic">Pendiente</h4>
                                <ol className="list-unstyled">
                                    <li>
                                        <NavLink href="#">EnlaceA</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">EnlaceB</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">EnlaceC</NavLink>
                                    </li>
                                </ol>
                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Inicio;