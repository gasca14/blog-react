import '../Historia/Historia.css'
import reference from '../../assets/images/portada_iglesia.jpeg'

const Historia = () => {
    return (
        <>
           <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <img id='first' src={reference} alt="logo_iglesia" />   
                    </div>
                    <div className="col-md-6" id='origen'>
                        <h4 id='inicioh'>Origen</h4>
                        <p id='inicio'>Persiste una leyenda en el sentido de que a fines del siglo primero de la Era Cristiana, por causa de las persecuciones en Grecia y Roma un grupo de creyentes refugiados hallaron albergue en las selvas de la parte Noroeste de Europa, llevando consigo la religión cristiana en la forma que habían aprendido del Apóstol Juan y del Apóstol Pablo.</p>
                        <p id='inicio'>La Iglesia Presbiteriana Asociada Reformada brotó de ese ambiente y todavía se inclina a ese tipo de vida cristiana: énfasis en la vida pía; profundo conocimiento de la Biblia, de parte del ministro tanto como de los miembros; y estructura eclesiástica basada en  "ancianos" o "presbíteros".</p>
                        <h4 id='inicioh'>Nombre</h4>
                        <p id='inicio'>En la Reforma (encabezado en el Siglo XVI por Lulero, Zwinglio, Calvino y otros) al salir del dominio del papado, miles de congregaciones en Europa se organizaron bajo una forma de gobierno de parte de "ancianos" o "presbíteros".
                        </p>
                        <p id='inicio'>La iglesia Presbiteriana deriva su nombre de la palabra griega presbyteros, que significa literalmente "anciano". La iglesia es administrada a través de "presbíteros", elegidos democráticamente y son gobernadas por un "consistorio" o "consejo" de presbíteros.</p>
                        <p id='inicio'>En Escocia, Inglaterra e Irlanda esta iglesia tomó el nombre de Iglesia Presbiteriana. En Holanda, Suiza, Francia y Alemania, esta iglesia es conocida por el nombre de Iglesia Reformada.</p>
                    </div>
                </div>
                <div id='reforma' className="row">
                    <div className="col-md-6 mt-4">
                        <h4 id='inicioh'>La iglesia presbiteriana reformada</h4>
                        <p id='inicio'>Debido a los esfuerzos del gobierno en Escocia e Inglaterra para establecer una sola iglesia en el reino, allá por el año 1661 se logro establecer prelados y liturgia episcopal en la Iglesia Oficial Presbiteriana de Escocia. Luego varios miles de presbiterianos inconformes se lanzaron en revolución para defender su tradicional religión sencilla. Perdiendo la guerra varios miles de ellos fueron liquidados; los sobrevivientes se unieron al fin en una iglesia independiente. La Iglesia Presbiteriana Reformada. Posteriormente millares de ellos emigraron a las colonias americanas.</p>
                        <h4 id='inicioh' className='mt-4'>La iglesia presbiteriana asociada reformada</h4>
                        <p id='inicio'>Al encontrarse en semejantes condiciones de miembros esparcidos y escasez de ministros en las regiones fronterizas de las Colonias Americanas, fuertes contingentes de ambas Iglesias, la Presbiteriana Reformada y la Presbiteriana Asociada, se unieron en una: la Iglesia Presbiteriana Asociada Reformada.</p>
                    </div>
                    <div className="col-md-6 mt-3">
                    <h4 id='inicioh'>La iglesia presbiteriana asociada</h4>
                        <p id='inicio'>De vuelta, en 1732, cuatro congregaciones con Ebenezer Erskine y otros tres ministros, y posteriormente muchos miliares de personas, se salieron de la Iglesia Oficial de Escocia para asegurar para sí la predicación de índole evangélico, y el derecho de cada congregación de elegir a su propio pastor. Este movimiento alcanzó gran número de los Presbiterianos escoceses, millares de los cuales emigraron a las colonias americanas.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Historia;