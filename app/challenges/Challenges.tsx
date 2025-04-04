import { MultiColorButtons } from "~/components/buttons/MultiColorButtons"
import styles from "~/challenges/Challenges.module.css"
import { StickyButton } from "~/components/buttons/StickyButton"
import { useState } from "react"
import Modal from "~/components/modal/modal"
import { ResultButton } from "~/components/buttons/ResultButton"
import { getWeekNumber } from "~/components/utilities/dateUtils"

export function Challenges() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<"info" | "result">("info")
  const [completedDays, setCompletedDays] = useState<number | null>(null)
  const [totalDays, setTotalDays] = useState<number | null>(null)

  const handleOpenModal = (
    type: "info" | "result",
    completed: number,
    total: number
  ) => {
    setModalContent(type)
    setCompletedDays(completed)
    setTotalDays(total)
    setIsModalOpen(true)
  }

  const weekNumber = getWeekNumber()

  return (
    <main>
      <div className={styles.challengesContainer}>
        <h4>Vecka {weekNumber}</h4>
        <h2>No spend-week</h2>

        <MultiColorButtons />
        <ResultButton
          onClick={(completedDays, totalDays) =>
            handleOpenModal("result", completedDays, totalDays)
          }
        />
        <StickyButton
          buttonText={"?"}
          onClick={() => handleOpenModal("info", 0, 0)}
        />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {modalContent === "info" ? (
            <>
              <h2>Hur funkar det? 🤔</h2>
              <p>
                För varje dag låses en ny knapp upp och du får två val -
                antingen har du spenderat pengar eller inte.
              </p>
              <p>
                - För icke spenderat trycker du en gång på dagens knapp så att
                den blir GRÖN 🟢
              </p>
              <p>- Vid två tryck blir knappen RÖD 🔴</p>
              <p>När du gjort hela veckan får du resultatet.</p>
              <p>Du kan sedan gå in i resultat och se din utveckling!</p>
            </>
          ) : (
            <>
              <h2>Ditt resultat 📊</h2>
              {completedDays === 0 ? (
                <p>Bättre lycka nästa gång! 😞</p>
              ) : (
                <p>
                  Du klarade {completedDays}/{totalDays} dagar, bra jobbat!
                </p>
              )}
            </>
          )}
        </Modal>
      </div>
    </main>
  )
}
