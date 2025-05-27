import React from 'react';
import '../assets/styles/Sidebar.css';
import logo from '../assets/react.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#video-section">Video</a></li>
          <li><a href="#about-app">Sobre la app</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
