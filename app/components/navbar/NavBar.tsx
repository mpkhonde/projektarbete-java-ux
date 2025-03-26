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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
