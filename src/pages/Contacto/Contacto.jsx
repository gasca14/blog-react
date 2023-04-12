// import PaginaConstruccion from "../../components/PaginaConstruccion/PaginaConstruccion";
import '../Contacto/Contacto.css'
import ubicacion from '../../assets/images/ubicacion.png'
import iparbethel from '../../assets/images/iparbethel.png'
const Contacto = () => {
    return ( 
        <>
            {/* <PaginaConstruccion></PaginaConstruccion> */}
            <div className="container mt-5">
                <div className="row">
                    <div className="offset-3 col-6">
                        <p id='direccion'>Dirección: Calle 5 de febrero #16, san isidro, 79386, Cárdenas, S.L.P</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img id='ubica' src={ubicacion} alt="ubicacion" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img id='ipar' src={iparbethel} alt="imagen-iglesia-bethel" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contacto;