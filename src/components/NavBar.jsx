import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">Mi Tienda</div>
      <nav className="navbar__menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Producto</a></li>
          <li><a href="#">Historia</a></li>
        </ul>
      </nav>
      <div className="navbar__actions">
        <input type="text" placeholder="Buscar..." className="navbar__search" />
        <button className="navbar__cart">🛒</button>
      </div>
    </header>
  );
}

export default Navbar;