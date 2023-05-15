import { Navigate,NavLink } from "react-router-dom"; 


function Nav(){

return(

<nav>
<NavLink className={({isActive})=>(isActive ? 'activado' :null)}  to= '/'>PORTADA</NavLink>
<NavLink className={({isActive})=>(isActive ? 'activado' :null)} to= '/Hoteles'>RESERVA TU HOTEL</NavLink>
<NavLink className={({isActive})=>(isActive ? 'activado' :null)} to= '/Paquetes'>PAQUETES</NavLink>




</nav>


)

}
export default Nav