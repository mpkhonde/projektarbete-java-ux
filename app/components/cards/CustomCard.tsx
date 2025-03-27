import styles from "~/components/cards/CustomCard.module.css"

interface CustomCardProps {
  tipTitle: string
  description: string
}

export function CustomCard({ tipTitle, description }: CustomCardProps) {
  return (
    <div className={styles.card}>
      <h3>{tipTitle}</h3>
      <p>{description}</p>
    </div>
  )
}
