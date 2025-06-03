import React, { useState } from 'react';
import "../assets/styles/navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">Mi Tienda</div>
      <button className="navbar__toggle" onClick={toggleMenu}>
        {/* Icono de hamburguesa (puedes usar SVGs o caracteres) */}
        &#9776;
      </button>

      <nav className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <a href="#" onClick={(e) => e.preventDefault()}>Historia</a>
      </nav>
      <div className={`navbar__actions ${menuOpen ? 'navbar__actions--open' : ''}`}>
        <input type="text" placeholder="Buscar..." className="navbar__search" />
        <button className="navbar__cart">🛒</button>
      </div>
    </header>
  );
}

export default Navbar;