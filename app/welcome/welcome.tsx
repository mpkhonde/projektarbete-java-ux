import { MultiColorButtons } from "~/components/MultiColorButtons";

export function Welcome() {
  return (
    <main>
      <div className="no-spend-week">
      <h2>No spend-week</h2>
      <p>Har du spenderat något denna vecka? <br/> GRÖN = INTE SPENDERAT<br/>RÖD = SPENDERAT </p>
      </div>
      <div className="button-container">
        <MultiColorButtons />
      </div>
    </main>
  );
}
