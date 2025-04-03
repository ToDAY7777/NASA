import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Globo from '../api/globo';
import Scroll from '../com/scroll';
import Camara from '../cam/camara';

import PageHome from './home/PageHome';
import PageAbout from './about/PageAbout';
import PageContact from './contact/PageContact';
import PageRecetas from './recetas/PageRecetas';
import PageInfo from './info/PageInfo';
import NotFound from './NotFound';


import PageDash from './dash/PageDash';
import DetallesDash from './dash/DetallesDash';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="/contact" element={<PageContact />} />
      <Route path="/recetas" element={<PageRecetas />} />
      <Route path="/receta/:id" element={<PageInfo />} />

      <Route path="/api" element={<Globo />} />
      <Route path="/com" element={<Scroll />} />
      <Route path="/cam" element={<Camara />} />

     
      <Route path="/dash">
        <Route index element={<PageDash />} />
        <Route path=":city" element={<DetallesDash />} />
      </Route>

     
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

