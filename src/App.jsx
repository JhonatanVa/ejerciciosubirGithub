import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Importar Layout
import Home from './pages/Home';
import Productos from './pages/productos';
import NotFound from './pages/NotFound'; // Importar NotFound
import './assets/styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Cambiado: Ruta inicial a Home */}
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/*" element={<NotFound />} />{/* Descomentar si se usa NotFound */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;