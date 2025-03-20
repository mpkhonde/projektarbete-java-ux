import styles from "./Header.module.css";
import logo from "../images/balanza_logo_2.png"
export function Header() {
  return (
    <header className={styles.header}>

        <img src={logo} alt="Bild på en logotyp för Balanza" height="80px" width="auto"/>
      
    </header>
  );
}