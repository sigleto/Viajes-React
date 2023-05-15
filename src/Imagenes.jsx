import React,{useState} from "react";
import { useParams } from "react-router-dom";
 function Imagenes(){
   const {foto}=useParams();
   return(
      <img src={`/Amsterdam/${foto}.jpg`}></img>
   )
   }
     
 



export default Imagenes