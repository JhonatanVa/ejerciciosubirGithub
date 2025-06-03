import React, { useState } from 'react';
import '../assets/styles/Sidebar.css';
import logo from '../assets/react.svg';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar abierto por defecto

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      <button onClick={toggleSidebar} className="sidebar__toggle-btn">
        {isOpen ? '\u276E' : '\u276F'} {/* Flecha izquierda si está abierto, derecha si está cerrado */}
      </button>
      {isOpen && (
        <div className="sidebar__content">
          <div className="sidebar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li><a href="#video-section">Video</a></li>
              <li><a href="#about-app">Sobre la app</a></li>
            </ul>
          </nav>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
