import { loadFromLocalStorage } from "../utilities/localStorageUtils"
import { CustomButton } from "./CustomButton"
import styles from "~/components/buttons/ResultButton.module.css"
import LockWhite from "../../images/lockWhite.svg"

interface ResultButtonProps {
  onClick: (greenDays: number, totalDays: number) => void
}

export function ResultButton({ onClick }: ResultButtonProps) {
  const todayIndex = new Date().getDay() // 0 = Söndag, 6 = Lördag
  const isFriday = todayIndex === 5 // Kolla om det är fredag

  function checkButtonsPushed() {
    const colors = loadFromLocalStorage("weekColors") || []

    // Räkna antalet gröna dagar (de som är markerade med #c5fcc3)
    const greenDays = colors.filter(
      (color: string) => color === "#c5fcc3"
    ).length

    // Kontrollera om alla dagar är markerade som grön eller röd
    const allDaysCompleted = colors.every(
      (color: string) => color === "#c5fcc3" || color === "#ffa2a2"
    )

    if (!allDaysCompleted) {
      alert(
        "Var vänlig och markera alla dagar som 'avklarade' eller 'inte avklarade' innan du klickar på Resultat."
      )
      return // Avbryt om ingen dag är markerad
    } else {
      const result = window.confirm("Är du säker på att du är klar?")
      if (result) {
        console.log("Du valde ja")
      } else {
        console.log("Du valde nej")
        return
      }
    }

    // Skicka antal gröna dagar till onClick (det kan användas för att uppdatera modalens innehåll)
    onClick(greenDays, colors.length)
  }

  return (
    <div className={styles.resultContainer}>
      <CustomButton
        className={styles.resultButton}
        buttonText="Resultat"
        onClick={checkButtonsPushed}
        disabled={!isFriday} // Deaktivera knappen om det inte är fredag
        icon={LockWhite} // Skicka lock-ikonen här
      />
    </div>
  )
}
