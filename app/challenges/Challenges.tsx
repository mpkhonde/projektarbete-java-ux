import { MultiColorButtons } from "~/components/buttons/MultiColorButtons";

export function Challenges() {
  return (
    <main>
      <div className="no-spend-week">
        <h2>No spend-week</h2>
        <p>
          Har du spenderat något denna vecka?
          <br /> 🟢 = Inte spenderat
          <br /> 🔴 = Spenderat
        </p>
      </div>
      
        <MultiColorButtons />
      
    </main>
  );
}
