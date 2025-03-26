import { useState } from "react";
import { Link } from "react-router";
import "./NavBar.css"


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Desktop Navbar */}
      <div className="nav-desktop">
        <ul className="nav-links">
          <li><Link to="/">Utmaningar</Link></li>
          <li><Link to="/savingtips">Spartips</Link></li>
        </ul>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="nav-mobile">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ {/* Hamburgersymbol */}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Utmaningar</Link></li>
        <li><Link to="/savingtips" onClick={() => setMenuOpen(false)}>Spartips</Link></li>
      </ul>
    </nav>
  );
}
