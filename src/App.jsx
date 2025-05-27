import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Navbar />
      <main style={{flex: 1}}>
        {/* Aquí va el contenido principal */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

//construir mockups, sidebar, logo y un video debe verse directamente y que este empotrado
// (enterate de mi aplicacion )