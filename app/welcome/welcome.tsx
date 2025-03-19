import { MultiColorButtons } from "~/components/MultiColorButtons";

export function Welcome() {
  return (
    <main>
      <div className="nospendweek">
      <h2>No spend-week</h2>
      <p>Har du spenderat något denna vecka? GRÖN = INTE SPENDERAT<br/>RÖD = SPENDERAT </p>
      </div>
      <div className="buttoncontainer">
        <MultiColorButtons />
      </div>
    </main>
  );
}
