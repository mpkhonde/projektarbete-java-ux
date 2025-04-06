import { CustomButton } from "./CustomButton";
import styles from "~/components/buttons/ResultButton.module.css";
import LockWhite from "../../images/lockWhite.svg";

interface ResultButtonProps {
  onClick: () => void;
}

export function ResultButton({ onClick }: ResultButtonProps) {
  const todayIndex = new Date().getDay(); // 0 = Söndag, 6 = Lördag
  const isFriday = todayIndex === 5; // Kolla om det är fredag

  return (
    <div className={styles.resultContainer}>
      <CustomButton
        className={styles.resultButton}
        buttonText="Resultat"
        onClick={onClick}
        icon={LockWhite}
        //disabled={!isFriday} // Inaktivera knappen om det inte är fredag
      />
    </div>
  );
}
