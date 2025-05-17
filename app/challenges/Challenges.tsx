// 🔽 FEATURE: Ny komponent för aktiviteter per dag
import DayActivity from "~/components/DayActivity";

import { useEffect, useState } from "react"
import { MultiColorButtons } from "~/components/buttons/MultiColorButtons"
import styles from "~/challenges/Challenges.module.css"
import { StickyButton } from "~/components/buttons/StickyButton"
import Modal from "~/components/modal/modal"
import { ResultButton } from "~/components/buttons/ResultButton"
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "~/components/utilities/localStorageUtils"
import { getWeekNumber } from "~/components/utilities/dateUtils"
import type { HistoryObject } from "~/types/HistoryObject"
import ChaoticStackAnimation from "~/components/animation/ChaoticStackAnimation"
import ConfettiAnimation from "~/components/animation/ConfettiAnimation"

export function Challenges() {
  // ────────────────────────────────────────────────
  // 🔧 STATE: Modaler och användargränssnitt
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<
    "info" | "result" | "warning" | "confirmation"
  >("info")

  // 🔧 STATE: Resultathantering
  const [completedDays, setCompletedDays] = useState<number>(0)
  const [totalDays, setTotalDays] = useState<number>(0)

  // 🔧 STATE: Historik
  const [historyList, setHistoryList] = useState<HistoryObject[]>([
    {
      week: 0,
      daysCompleted: 0,
      daysTotal: 0,
    },
  ])

  // 🔧 STATE: Veckologik
  const [weekDone, setWeekDone] = useState<boolean>(
    loadFromLocalStorage("weekDone") || false
  )
  const [resetTrigger, setResetTrigger] = useState(0)
  const [weekColors, setWeekColors] = useState<string[]>([])

  // 🔧 Tidsbaserat
  const todayIndex = new Date().getDay()
  const weekNumber = getWeekNumber()

  // ────────────────────────────────────────────────
  // 🔁 Effekt: Nollställ vecka varje måndag
  useEffect(() => {
    if (todayIndex === 1) {
      setWeekDone(false)
      saveToLocalStorage("weekDone", false)
    }
  }, [todayIndex])

  // ────────────────────────────────────────────────
  // 📦 Modal-hanterare
  const handleOpenModal = (
    content: "info" | "result" | "warning" | "confirmation",
    completed: number,
    total: number
  ) => {
    setModalContent(content)
    setIsModalOpen(true)
    setCompletedDays(completed)
    setTotalDays(total)
  }

  // ✔️ Kontroll: Är alla dagar markerade?
  const checkAllDaysCompleted = () => {
    const colors = loadFromLocalStorage("weekColors") || []
    return colors.every(
      (color: string) => color === "#c5fcc3" || color === "#ffa2a2"
    )
  }

  // 🧮 Knapp: Visa resultat
  const handleResultButtonClick = () => {
    const colors = loadFromLocalStorage("weekColors") || []
    const completed = colors.filter(
      (color: string) => color === "#c5fcc3"
    ).length
    const total = colors.length

    setCompletedDays(completed)
    setTotalDays(total)

    if (!checkAllDaysCompleted()) {
      handleOpenModal("warning", completed, total)
    } else {
      handleOpenModal("confirmation", completed, total)
    }
  }

  // 💾 Spara historik efter slutförd vecka
  const saveHistory = () => {
    const weeklyHistory: HistoryObject = {
      week: getWeekNumber(),
      daysCompleted: completedDays,
      daysTotal: totalDays,
    }

    const existingHistory: HistoryObject[] =
      loadFromLocalStorage("history") || []

    const updatedHistoryList = [...existingHistory, weeklyHistory]

    setHistoryList(updatedHistoryList)
    saveToLocalStorage("history", updatedHistoryList)

    const colors = loadFromLocalStorage("weekColors") || []
    setWeekColors(colors)

    removeFromLocalStorage("weekColors")
    setResetTrigger((prev) => prev + 1)
  }

  // 📐 UI-positioner från Figma
  const figmaPositions = [
    { x: 0, y: 0, rotate: 0 },
    { x: -5, y: -32, rotate: 0 },
    { x: 0, y: -64, rotate: 0 },
    { x: -5, y: -96, rotate: 0 },
    { x: 5, y: -130, rotate: 15 },
  ]

  // ────────────────────────────────────────────────
  // 🖥️ RENDER
  return (
    <div className={styles.challengesContainer}>
      <h4>v.{weekNumber}</h4>
      <h2>
        No Spend Week
        <StickyButton
          buttonText={"?"}
          onClick={() => handleOpenModal("info", 0, 0)}
        />
      </h2>

      <MultiColorButtons weekDone={weekDone} resetTrigger={resetTrigger} />
      <ResultButton onClick={handleResultButtonClick} disabled={weekDone} />

      {/* 📦 Modal för info/resultat/varning */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent === "info" && (
          <div>
            <h2>Hur går det till? 🤔</h2>
            <p>Varje dag får du en ny chans att hålla dig till utmaningen:</p>
            <p className={styles.bold}>1 tryck 🟢</p>
            <p className={styles.italic}>
              Du klarade dagen utan att köpa något onödigt - snyggt jobbat!
            </p>
            <p className={styles.bold}>2 tryck 🔴</p>
            <p className={styles.italic}>
              Du råkade spendera... sånt som händer!
            </p>
            <p>När du klickat i alla dagar kan du hämta resultatet!</p>
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
              När du klickar på 'Ja' avslutar du denna veckas utmaning och har
              inte möjlighet att ändra dina val.
            </p>
            <div className={styles.confirmButtonContainer}>
              <button
                className={styles.confirmButton}
                onClick={() => {
                  saveHistory()
                  handleOpenModal("result", completedDays, totalDays)
                }}
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
                <ConfettiAnimation numberOfPieces={800} />
                <p>
                  Du klarade {completedDays} av {totalDays} dagar, bra jobbat!
                </p>
                <ChaoticStackAnimation colors={weekColors} />
              </>
            )}
          </div>
        )}
      </Modal>

      {/* 🧩 Ny funktionell komponent för dag-aktiviteter */}
      <DayActivity />
    </div>
  )
}
