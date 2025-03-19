import "./Header.module.css";
import logo from "../images/balanza_logo.png"
export function Header() {
  return (
    <header>

        <img src={logo} alt="Bild på en logotyp för Balanza" height="80px" width="auto"/>
      
    </header>
  );
}