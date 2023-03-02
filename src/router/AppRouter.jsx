import { Navigate,Route,Routes } from "react-router-dom";
import Contacto from "../pages/Contacto/Contacto";
import Dominical from "../pages/Dominical/Dominical";
import Femenil from "../pages/Femenil/Femenil";
import Galeria from "../pages/Galeria/Galeria";
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
                <Route path="/404" element={<NotFound/>}/>

                
                <Route path='/' element={<Navigate to="/inicio"/>}/>
                <Route path='*' element={<Navigate to="/404"/>}/>
            </Routes>
        </>
    );
}

export default AppRouter;