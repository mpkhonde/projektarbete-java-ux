import { useEffect, useState } from "react"
import type { SavingTip } from "types/SavingTip"
import { CustomCard } from "~/components/cards/CustomCard"
import styles from "./SavingTips.module.css"
import { getWeekday, getWeekNumber } from "~/components/utilities/dateUtils"

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
    async function fetchData() {
      try {
        const result = await fetch(
          "https://balanza-savingtips-api.onrender.com/api/savingtips"
        )
        const tips: SavingTip[] = await result.json()
        setTipList(tips)
      } catch (error) {
        console.error("Fel vid hämtning:", error)
      }
    }

    fetchData()

    setWeekday(getWeekday)
    setWeekNumber(getWeekNumber)

    console.log(weekday)
    console.log(weekNumber)
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
