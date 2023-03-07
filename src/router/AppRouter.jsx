import { Navigate,Route,Routes } from "react-router-dom";
import PaginaConstruccion from "../components/PaginaConstruccion/PaginaConstruccion";
import Contacto from "../pages/Contacto/Contacto";
import Dominical from "../pages/Dominical/Dominical";
import Femenil from "../pages/Femenil/Femenil";
import Galeria from "../pages/Galeria/Galeria";
import Historia from "../pages/Historia/Historia";
import Infantil from "../pages/Infantil/Infantil.";
import Inicio from "../pages/Inicio/Inicio";
import Jovenes from "../pages/Jovenes/Jovenes";
import Nosotros from "../pages/Nosotros/Nosotros";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/infantil" element={<Infantil/>}/>
                <Route path="/jovenes" element={<Jovenes/>}/>
                <Route path="/femenil" element={<Femenil/>}/>
                <Route path="/dominical" element={<Dominical/>}/>
                <Route path="/galeria" element={<Galeria/>}/>
                <Route path="/historia" element={<Historia/>}/>
                <Route path="/construccion" element={<PaginaConstruccion/>}/>
                <Route path="/404" element={<NotFound/>}/>
                
                <Route path='/' element={<Navigate to="/inicio"/>}/>
                <Route path='*' element={<Navigate to="/404"/>}/>
            </Routes>
        </>
    );
}

export default AppRouter;