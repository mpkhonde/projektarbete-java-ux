import styles from "./footer.module.css";

const Footer = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = now.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <p className={styles["footer-copy"]}>
          © 2025 Balanza. Alla rättigheter förbehållna.
        </p>
        <p className={styles["footer-updated"]}>
          🕒 Senast uppdaterad: {formattedDate} kl. {formattedTime}
        </p>
        <nav className={styles["footer-links"]}>
          <a href="#">🔒 Integritetspolicy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
