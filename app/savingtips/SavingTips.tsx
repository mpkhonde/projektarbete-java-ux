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

  useEffect(() => {
    console.log("TESTING OUT ASYNC FUNCTION")

    async function fetchData() {
      const result = await fetch(
        "https://balanza-savingtips-api.onrender.com/api/savingtips"
      )
      const tips: SavingTip[] = await result.json()
      setTipList(tips)

      console.log(tips)
    }

    fetchData()
    console.log(tipList)
  }, [])

  return (
    <main>
      <div className={styles.savingTipsContainer}>
        <CustomCard
          tipTitle={tipList[0].title}
          description={tipList[0].description}
        />
      </div>
    </main>
  )
}
