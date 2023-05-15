import { useState } from 'react'
import {BrowserRouter,Route,Routes,Navigate}from 'react-router-dom'
import Portada from './paginas/Portada' 
import Hoteles from './paginas/Hoteles'
import Error404 from './paginas/Error404'
import Paquetes from './paginas/Paquetes'
import PaqIslas from './Paquetes/Islasgriegas'
import Amsterdam from './Paquetes/Amsterdam'
import Francia from './Paquetes/Francia'
import Imagenes from './Imagenes'
import './App.css'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Portada/>}/>
    <Route path='/Hoteles' element={<Hoteles/>}/>   
    <Route path='/Paquetes' element={<Paquetes/>}/>   
    <Route path='/Paquetes/Islasgriegas' element={<PaqIslas/>}/>
    <Route path='/Paquetes/Amsterdam' element={<Amsterdam/>}/>
    <Route path='/Paquetes/Francia' element={<Francia/>}/>
    <Route path='/:foto' element={<Imagenes/>}/>
    <Route path='*' element={<Error404/>}/>
   </Routes>
   </BrowserRouter>
   
   
  )
}

export default App
