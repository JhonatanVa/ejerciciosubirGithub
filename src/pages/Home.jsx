import React from 'react';
import logo from '../assets/react.svg'; // Importar el logo

function Home(){
    return (
        <>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={logo} alt="Logo de la aplicación" style={{width: '150px'}} />
          </div>
    
          {/* Sección Sobre la app */}
          <div id="about-app" style={{marginBottom: '30px'}}>
            <h3>Sobre la aplicación</h3>
            <p>Esta aplicación está diseñada para mostrar las capacidades de React, incluyendo componentes, enrutamiento básico y estructura modular.</p>
            <p>Explora las diferentes secciones para ver ejemplos de cómo se pueden integrar diversos elementos como videos, imágenes y texto.</p>
          </div>
    
          {/* Video Empotrado */}
          <div id="video-section" style={{ textAlign: 'center' }}>
            <h3>Entérate de mi aplicación</h3>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/MJkdaVFHrto" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </>
    )
}
export default Home;