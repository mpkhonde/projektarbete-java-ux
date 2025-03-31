import styles from "~/components/cards/CustomCard.module.css"
import type { SavingTip } from "types/SavingTip"

export function CustomCard(props: SavingTip) {
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}
