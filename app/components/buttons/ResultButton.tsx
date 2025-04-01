import { useState } from "react";
import { loadFromLocalStorage } from "../utilities/localStorageUtils";
import { CustomButton } from "./CustomButton";
import styles from "~/components/buttons/ResultButton.module.css";
import LockWhite from "../../images/lockWhite.svg";

export function ResultButton() {
  const [summary, setSummary] = useState<string>("");

  const todayIndex = new Date().getDay(); // 0 = Söndag, 6 = Lördag
  const isFriday = todayIndex === 5; // Kolla om det är fredag

 
  function calculateResult() {
    const colors = loadFromLocalStorage("weekColors") || [];
    
    // Kontrollera om alla dagar är markerade som grön eller röd
    const allDaysCompleted = colors.every((color: string) => color === "#c5fcc3" || color === "#ffa2a2");

    if (!allDaysCompleted) {
      // Visa en popup om ingen dag är markerad som grön eller röd
      alert("Var vänlig och markera minst en dag som 'avklarad' eller 'inte avklarad'.");
      return; // Avbryt om ingen dag är markerad
    }

    const greenDays = colors.filter((color: string) => color === "#c5fcc3").length;
    const redDays = colors.filter((color: string) => color === "#ffa2a2").length;

    setSummary(`Gröna dagar: ${greenDays}, Röda dagar: ${redDays}`);
  }

  return (
    <div className={styles.resultContainer}>
      <CustomButton
        className={styles.resultButton}
        buttonText="Resultat"
        onClick={calculateResult}
        disabled={!isFriday} // Deaktivera knappen om det inte är fredag
        icon={LockWhite} // Skicka lock-ikonen här
      />
      <p>{summary}</p>
    </div>
  );
}
