import { MultiColorButtons } from "~/components/buttons/MultiColorButtons";
import styles from "~/challenges/Challenges.module.css";
import { ResultButton } from "~/components/buttons/ResultButton";

export function Challenges() {
  return (
    <main>
      <div className={styles.challengesContainer}>
        <h2>No spend-week</h2>
      </div>
      
        <MultiColorButtons />
        <ResultButton />
      
    </main>
  );
}
