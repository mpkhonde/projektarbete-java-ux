import { useEffect, useState } from "react";
import type { SavingTip } from "types/SavingTip";

export function SavingTips() {
  const [tipList, setTipList] = useState<SavingTip[]>([
    {
      id: 0,
      title: "",
      description: "",
    },
  ]);

  useEffect( () => {
    console.log("TESTING OUT ASYNC FUNCTION");

    async function fetchData() {

        const result = await fetch("https://balanza-savingtips-api.onrender.com/api/savingtips")
        const tips: SavingTip[] = await result.json()
        setTipList(tips)

        console.log(tips[0].title)
    }

    fetchData()

  }, [])

  return (
    <main>
      <div>
        <p>{tipList[0].title}</p>
      </div>
    </main>
  );
}
