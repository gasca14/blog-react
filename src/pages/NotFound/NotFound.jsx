import '../NotFound/NotFound.css'
import error from '../../assets/images/error.jpg'
const NotFound = () => {
    return ( 
        <>
        <div className="container mt-5">
            <div className="row">
                <img id='notfound' src={error} alt="page not found" />
            </div>
        </div>
        </>
     );
}
 
export default NotFound;