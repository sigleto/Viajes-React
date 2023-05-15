import React from "react"; 
import { Link } from "react-router-dom";

function Paquetes(){


    return(
        <>
         <br></br>
   
        <p className='destino'>DESTINOS PREFERIDOS</p>

        <br></br>
     
  

        <Link className='linkes' to='/Paquetes/Islasgriegas'>Islas Griegas</Link> 
        <Link className='linkes' to='/Paquetes/Amsterdam'>Amsterdam</Link> 
        <Link className='linkes' to='/Paquetes/Francia'>Francia</Link> 
        
        </>
    )
}

export default Paquetes
