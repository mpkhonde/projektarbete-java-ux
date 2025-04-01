import styles from "./Header.module.css"
import logo from "../../images/balanza_logo_3.svg"
import { useEffect, useState } from "react"
import NavBar from "../navbar/NavBar"
export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`${styles.header} ${hasScrolled ? styles.scrolled : ""}`}
    >
      <NavBar />

      <img
        src={logo}
        alt="Bild på en logotyp för Balanza"
        height="80px"
        width="auto"
      />
    </header>
  )
}
