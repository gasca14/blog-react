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
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">Evento</strong>
                                <h3 className="mb-0">Convencion</h3>
                                <div className="mb-1 text-muted">Marzo 19 de 2023</div>
                                <p className="card-text mb-auto">
                                    Se les invita a hermanas en cristo a asistir a un evento el cual se estara llevando en la ciudad de tampico
                                </p>
                                <NavLink href="#" className="stretched-link">
                                    Continuar lectura...
                                </NavLink>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg
                                    className="bd-placeholder-img"
                                    width={200}
                                    height={250}
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                        Thumbnail
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Evento</strong>
                                <h3 className="mb-0">Caravana de autos</h3>
                                <div className="mb-1 text-muted">Abril 8 de 2023</div>
                                <p className="mb-auto">
                                    Durante el proximo mes de abril se estara llevando una caravana en nuestro municipio de cardenas.
                                </p>
                                <NavLink href="#" className="stretched-link">
                                    Continuar lectura...
                                </NavLink>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg
                                    className="bd-placeholder-img"
                                    width={200}
                                    height={250}
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                        Thumbnail
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-8">
                        <Link id='history' className="pb-4 mb-4 fst-italic border-bottom list-unstyled" to='/historia'>Historia de la iglesia asociada reformada</Link>
                        <article className="blog-post mt-5">
                            <h2 className="blog-post-title mb-1">"Oré en el nombre de Jesús y Él me respondió": Héroes rescatan a 17.000 personas en Afganistán</h2>
                            <p className="blog-post-meta">
                                Marzo 1, 2023
                            </p>
                            <p>
                                Tras la toma del poder por los talibanes, los afganos que ayudaron al ejército estadounidense se enfrentaron a la muerte. Un veterano de la Marina estadounidense y ex campeón de artes marciales mixtas arriesgó su vida para volver y salvar a su intérprete afgano. Pero dice que Dios no quería que la misión de rescate se detuviera ahí.
                            </p>
                            <hr />
                            <p>
                                "Por favor, tengan a los pobres afganos en sus oraciones porque creo firmemente en las oraciones. E incluso con este asunto de la evacuación, oré en el nombre de Jesús, y Él respondió. Y ya sabes que todo sucedió como un milagro para mí", dijo Aziz.
                            </p>
                            <hr />
                            <p>
                            Robichaux señala el papel de Dios en todos los rescates. "Nos mantuvo a salvo, nos dio claridad de ideas y abrió puertas que eran imposibles de abrir para cualquier hombre. Y pudimos hacer algo increíble y formar parte de ello. Pero, en última instancia, Dios lo orquestó, y toda la gloria para Él", dijo.
                            </p>
                            <a href="https://www1.cbn.com/mundocristiano/el-mundo/2023/march/ore-en-el-nombre-de-jesus-y-el-me-respondio-heroes-rescatan-a-17-000-personas-en-afganistan" target='_blank' rel='noopener noreferrer'>Leer mas...</a>       
                        </article>
                        <article className="blog-post">
                            <h2 className="blog-post-title mb-1">Por primera vez se celebró el Día de las Iglesias Evangélicas en la ciudad autónoma de Buenos Aires</h2>
                            <p className="blog-post-meta">
                                {/* December 23, 2020 by <a href="#">Jacob</a>P */}
                            </p>
                            <p>
                            Las autoridades de la Alianza Cristiana de Iglesias Evangélicas de la República Argentina y del Consejo de Pastores de la Ciudad Autónoma de Buenos Aires celebraron por primera el ‘Día de las Iglesias Evangélicas’ en el Salón San Martín de la Legislatura.
                            </p>
                            <p>
                            La celebración fue instituida para cada 31 de octubre a través de la ley 6551 sancionada en julio último por iniciativa del legislador Emmanuel Ferrario y votada por casi la totalidad de los parlamentarios, como un reconocimiento a todos los ciudadanos pertenecientes a esta fe y al trabajo de todas las Iglesias Evangélicas de la ciudad. De esta manera, se sumó a las 15 provincias argentinas que ya hicieron lo propio en sus legislaturas respectivas.
                            </p>
                            <a href="https://www1.cbn.com/mundocristiano/latinoamerica/2022/november/por-primera-vez-se-celebro-el-dia-de-las-iglesias-evangelicas-en-la-ciudad-autonoma-de-buenos-aires" target='_blank' rel='noopener noreferrer'>Leer mas...</a>
                        </article>
                        <article className="blog-post">
                            <h2 className="blog-post-title mb-1">Avivamiento: Cientos de personas se bautizan en una playa de Filipinas</h2>
                            <p className="blog-post-meta">
                                {/* December 14, 2020 */}
                            </p>
                            <p>
                            Una multitud de personas se alinean junto a la orilla del mar para testificar su fe en Cristo en la ciudad de Davao. "No es obra del hombre. Esta gran cosecha de almas es el avivamiento de Dios".
                            </p>
                            <p>              
                            El 18 de febrero, una multitud de personas hizo fila junto al mar para dar testimonio de su fe en Cristo Jesús en el balneario Praia de Vales en la ciudad de Davao.
                            </p>
                            <a href="https://www.acontecercristiano.net/2023/02/avivamiento-cientos-de-personas-se-bautizan-filipinas.html" target='_blank' rel='noopener noreferrer'>Leer mas...</a>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <div className="position-sticky" style={{ top: "2rem" }}>
                            <div className="p-4 mb-3 bg-light rounded">
                                <h4 className="fst-italic">Acerca de</h4>
                                <p className="mb-0">
                                    En nuestra pagina encontraras informacion de interes acerca de eventos, asi como material importante que puedes consultar y descargar   .
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
                            <div className="p-4">
                                <h4 className="fst-italic">Elsewhere</h4>
                                <ol className="list-unstyled">
                                    <li>
                                        <NavLink href="#">GitHub</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Twitter</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#">Facebook</NavLink>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Inicio;