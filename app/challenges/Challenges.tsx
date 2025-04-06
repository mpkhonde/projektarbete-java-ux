import { useState } from "react";
import { MultiColorButtons } from "~/components/buttons/MultiColorButtons";
import styles from "~/challenges/Challenges.module.css";
import { StickyButton } from "~/components/buttons/StickyButton";
import Modal from "~/components/modal/modal";
import { ResultButton } from "~/components/buttons/ResultButton";
import { loadFromLocalStorage } from "~/components/utilities/localStorageUtils";
import { getWeekNumber } from "~/components/utilities/dateUtils";
import { motion } from "motion/react";

export function Challenges() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<
    "info" | "result" | "warning" | "confirmation"
  >("info");
  const [completedDays, setCompletedDays] = useState<number>(0);
  const [totalDays, setTotalDays] = useState<number>(0);

  const handleOpenModal = (
    content: "info" | "result" | "warning" | "confirmation",
    completed: number,
    total: number
  ) => {
    setModalContent(content);
    setIsModalOpen(true);
    setCompletedDays(completed);
    setTotalDays(total);
  };

  const checkAllDaysCompleted = () => {
    const colors = loadFromLocalStorage("weekColors") || [];
    const allDaysCompleted = colors.every(
      (color: string) => color === "#c5fcc3" || color === "#ffa2a2"
    );
    return allDaysCompleted;
  };

  const handleResultButtonClick = () => {
    const colors = loadFromLocalStorage("weekColors") || [];
    // Räkna antalet gröna (icke spenderade) eller röda (spenderade) dagar
    const completed = colors.filter(
      (color: string) => color === "#c5fcc3"
    ).length;
    setCompletedDays(completed);
    const total = colors.length;
    setTotalDays(total);
    if (!checkAllDaysCompleted()) {
      // Om alla dagar inte är markerade, visa varning
      handleOpenModal("warning", completed, total);
    } else {
      // Om alla dagar är markerade, visa bekräftelse
      handleOpenModal("confirmation", completed, total);
    }
  };

  const weekNumber = getWeekNumber();

  // Skapa en lista av dagar för animationen, baserat på completedDays och totalDays
  const days = Array.from({ length: totalDays }, (_, index) => {
    const isCompleted = index < completedDays; // Markera om dagen är slutförd
    return isCompleted ? "#c5fcc3" : "#ffa2a2"; // Grön för slutförd, röd för ej slutförd
  });

  return (
    <div className={styles.challengesContainer}>
      <h4>Vecka {weekNumber}</h4>
      <h2>
        No spend-week{" "}
        <StickyButton
          buttonText={"?"}
          onClick={() => handleOpenModal("info", 0, 0)}
        />
      </h2>

      <MultiColorButtons />
      <ResultButton onClick={handleResultButtonClick} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent === "info" && (
          <div>
            <h2>Hur funkar det? 🤔</h2>
            <p>
              För varje dag låses en ny knapp upp och du får två val - antingen
              har du spenderat pengar eller inte.
            </p>
            <p>
              - För icke spenderat trycker du en gång på dagens knapp så att den
              blir GRÖN 🟢
            </p>
            <p>- Vid två tryck blir knappen RÖD 🔴</p>
            <p>När du gjort hela veckan får du resultatet.</p>
            <p>Du kan sedan gå in i resultat och se din utveckling!</p>
          </div>
        )}
        {modalContent === "warning" && (
          <div>
            <h2>Vänligen markera alla dagar först! ⚠️</h2>
            <p>
              För att kunna visa ditt resultat måste alla dagar vara markerade
              som 'avklarade' eller 'inte avklarade'.
            </p>
            <button
              className={styles.confirmButton}
              onClick={() => setIsModalOpen(false)}
            >
              Gå tillbaka
            </button>
          </div>
        )}
        {modalContent === "confirmation" && (
          <div>
            <h2>Är du säker på att du är klar? ✅</h2>
            <p>
              När du klickar på 'Ja' så avslutar du denna veckas challenge och
              har inte möjlighet att ändra dina val.
            </p>
            <div className={styles.confirmButtonContainer}>
              <button
                className={styles.confirmButton}
                onClick={() =>
                  handleOpenModal("result", completedDays, totalDays)
                }
              >
                Ja
              </button>

              <button
                className={styles.confirmButton}
                onClick={() => setIsModalOpen(false)}
              >
                Nej
              </button>
            </div>
          </div>
        )}
        {modalContent === "result" && (
          <div className={styles.resultContainer}>
            <h2>Ditt resultat 📊</h2>
            {completedDays === 0 ? (
              <p>Bättre lycka nästa gång! 😞</p>
            ) : (
              <>
                <p>
                  Du klarade {completedDays}/{totalDays} dagar, bra jobbat!
                </p>

                {/* Huller om buller staplade klossar */}
                <div className={styles.chaoticStackContainer}>
                  {days.map((color, index) => {
                    // Slumpmässig offset för huller om buller-effekt
                    const randomOffset = Math.random() * 20 - 10; // -10 till 10px
                    const rotation = Math.random() * 10 - 5; // -5 till 5 grader
                    const delay = index * 0.2 + Math.random() * 0.3; // Varierande delay

                    return (
                      <motion.div
                        key={index}
                        initial={{
                          y: -100,
                          opacity: 0,
                          rotate: rotation,
                          x: randomOffset,
                        }}
                        animate={{
                          y: index * -2, // Lätt staplingseffekt
                          opacity: 1,
                          rotate: 0,
                          x: 0,
                        }}
                        transition={{
                          delay: delay,
                          type: "spring",
                          stiffness: 80, // Mjukare fjäder
                          damping: 12, // Mindre dämpning för mer studs
                          mass: 0.8, // Tyngre känsla
                          bounce: 0.4, // Mer studs
                        }}
                        style={{
                          backgroundColor: color,
                          position: "absolute",
                          bottom: `${index * 28}px`, // Tätare stapling
                          width: "50px",
                          height: "25px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          borderRadius: "2px",
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
