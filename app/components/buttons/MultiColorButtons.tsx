import { useEffect, useState } from "react";
import { CustomButton } from "./CustomButton";
import styles from "~/components/buttons/MultiColorButtons.module.css";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utilities/localStorageUtils";

const weekDays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

export function MultiColorButtons() {
  const [colors, setColors] = useState<string[]>([]);
  const todayIndex = new Date().getDay(); // 0 = Söndag, 6 = Lördag
  const isWeekend = todayIndex === 0 || todayIndex === 6; // Kolla om det är helg

  useEffect(() => {
    const storedColors =
      loadFromLocalStorage("weekColors") ||
      Array(weekDays.length).fill("#ffffff");
    setColors(storedColors);
  }, []);

  useEffect(() => {
    if (colors.length > 0) {
      saveToLocalStorage("weekColors", colors);
    }
  }, [colors]);

  function changeColor(index: number) {
    if (index > todayIndex || isWeekend) return; // Blockera klick om det är helg eller framtida dagar

    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] =
        newColors[index] === "#ffffff"
          ? "#c5fcc3"
          : newColors[index] === "#c5fcc3"
          ? "#ffa2a2"
          : "#ffffff";

      return newColors;
    });
  }

  return (
    <div className={styles.multiColorContainer}>
      {weekDays
        .slice(1, 6) // Filtrera ut endast måndag–fredag
        .map((day, index) => (
          <CustomButton
            key={day}
            buttonText={day}
            onClick={() => changeColor(index + 1)} // Justera indexeringen
            style={{ backgroundColor: colors[index + 1] }}
            disabled={index + 1 > todayIndex || isWeekend} // Lås framtida dagar & helger
          />
        ))}
    </div>
  );
}
