import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Importar Sidebar
import './assets/styles/App.css'; // Suponiendo que crearás este archivo para estilos de App
import logo from './assets/react.svg'; // Importar el logo

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Navbar />
      <div style={{display: 'flex', flex: 1}}>
        <Sidebar />
        <main style={{flex: 1, padding: '20px'}}>
          {/* Aquí va el contenido principal */}
          <h2>Contenido Principal</h2>
          <p>Este es el área de contenido principal de la aplicación.</p>
          
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo de la aplicación" style={{width: '150px', marginBottom: '20px'}} />
          </div>

          {/* Sección Sobre la app */}
          <div id="about-app" style={{marginBottom: '30px'}}>
            <h3>Sobre la aplicación</h3>
            <p>Esta aplicación está diseñada para mostrar las capacidades de React, incluyendo componentes, enrutamiento básico (simulado con anclas) y estructura modular.</p>
            <p>Explora las diferentes secciones para ver ejemplos de cómo se pueden integrar diversos elementos como videos, imágenes y texto.</p>
          </div>

          {/* Video Empotrado */}
          <div id="video-section">
            <h3>Entérate de mi aplicación</h3>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // URL de ejemplo, reemplaza con tu video
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

//construir mockups, sidebar, logo y un video debe verse directamente y que este empotrado
// (enterate de mi aplicacion )