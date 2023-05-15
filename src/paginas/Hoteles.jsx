import React  from "react"; 
import { Link } from "react-router-dom";
function Hoteles(){


return(
    <>
    <p className='hotel'>Elige tu hotel</p>
    <div className='paghotel'>
    <Link to='https://www.booking.com/index.es.html?aid=376371&label=es-JCB2UqznXtCO_RDP_nj5CAS410545262609:pl:ta:p1:p22.563.000:ac:ap:neg:fi:tikwd-65526620:lp1005421:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9Ye8F2ouj63ytkBtrYs5TAfs;ws=&gclid=CjwKCAjw6vyiBhB_EiwAQJRopr_Nj12vRAG4g9ee4BVQdxIiLXYzDJRJEyReRfsyQqZCak8dStEo9xoCntIQAvD_BwE' target='_blank' className='linkes'>BOOKING</Link>
    <Link to='https://www.trivago.es/'target='_blank' className='linkes'>TRIVAGO</Link>
    <Link to='https://www.kayak.es/'target='_blank'className='linkes'  >KAYAK</Link>
    </div>
    
    </>
)

}
export default Hoteles