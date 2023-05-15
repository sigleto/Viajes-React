import React from "react"; 
import { Link } from "react-router-dom";

function Portada(){


return(
    <>
    <h2>BIENVENIDOS A  NUESTRA MARAVILLOSA PÁGINA DE VIAJES A MEDIDA</h2>
    <p className='presen'>En esta página podrá encontrar el viaje deseado ajustándose completamente a su presupuesto. Podemos ofrecerle desde vuelos y hoteles específicos pinchando en los enlaces que arriba les ofrecemos o puede optar por un <Link className='enlace' to ='/Paquetes'> paquete personalizado </Link> en el que, en la medida de lo posible, se respetará su elección de fechas, destino y presupuesto.</p>
    </>
)


}
export default Portada