import { NavLink } from "react-router-dom";
function TopBar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/inicio'>Bethel</NavLink>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbarsExample04" style={{}}>
                        <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/inicio'>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/contacto'>Contacto</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/nosotros'>Nosotros</NavLink>
                            </li>       
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Sociedades</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to='/infantil'>Infantil</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/jovenes'>Jovenes</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/femenil'>Femenil</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/dominical'>Dominical</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default TopBar;