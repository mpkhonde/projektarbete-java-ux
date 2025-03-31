import { useEffect, useState } from "react"
import type { SavingTip } from "types/SavingTip"
import { CustomCard } from "~/components/cards/CustomCard"
import styles from "./SavingTips.module.css"

export function SavingTips() {
  const [tipList, setTipList] = useState<SavingTip[]>([
    {
      id: 0,
      title: "",
      description: "",
    },
  ])
  const [weekday, setWeekday] = useState<string>("")
  const [weekNumber, setWeekNumber] = useState<number>(0)

  useEffect(() => {
    console.log("TESTING OUT ASYNC FUNCTION")

    async function fetchData() {
      try {
        const result = await fetch(
          "https://balanza-savingtips-api.onrender.com/api/savingtips"
        )
        const tips: SavingTip[] = await result.json()
        setTipList(tips)

        console.log(tips)
      } catch (error) {
        console.error("Fel vid hämtning:", error)
      }
    }

    fetchData()
    console.log(tipList)

    const getDateInfo = () => {
      const days = [
        "Söndag",
        "Måndag",
        "Tisdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lördag",
      ]
      const today = new Date()
      const weekday = days[today.getDay()]
      setWeekday(weekday)

      const oneJan = new Date(today.getFullYear(), 0, 1)
      const weekNumber = Math.ceil(
        ((today.getTime() - oneJan.getTime()) / (1000 * 60 * 60 * 24) +
          oneJan.getDay() +
          1) /
          7
      )

      setWeekNumber(weekNumber)
    }

    getDateInfo()
  }, [])

  console.log(weekday)
  console.log(weekNumber)

  return (
    <main>
      <div className={styles.savingTipsContainer}>
        {tipList.length > 1 ? (
          <CustomCard
            title={tipList[13].title}
            description={tipList[13].description}
            id={tipList[13].id}
          />
        ) : (
          <CustomCard title="Laddar..." description="" id={0} />
        )}
      </div>
    </main>
  )
}
