import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encabezado from './Components/Encabezado';
import AppRoutes from './miPagina/AppRoutes';
import Globo from './api/globo';
import Scroll from './com/scroll';
import Camara from './cam/camara';
import Alumno from './Components/alumno';
import ProductosLista from './Components/ProductosLista';
import { MiPrimerProyectoMini } from './Components/MiniProyecto/MiPrimerProyectoMini';
import RepasoData from './Page1/RepasoData';
import HomeRecets from './homerecetas/HomeRecets';
import Copyright from './Copyright';

export default function App() {
  return (
    
      
    <>
    
    <Encabezado/>
     <AppRoutes/> 

  </>
   
  );
}
