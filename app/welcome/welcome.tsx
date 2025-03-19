import { MultiColorButtons } from "~/components/MultiColorButtons";

export function Welcome() {
  return (
    <main>
      <div className="nospendweek"></div>
      <h2>No spend-week</h2>
      <p>Har du spenderat något denna vecka? Klicka på knappen för vald dag (GRÖN = SPENDERAT, RÖD = INTE SPENDERAT) </p>
      <div className="buttoncontainer">
        <MultiColorButtons />
      </div>
    </main>
  );
}
