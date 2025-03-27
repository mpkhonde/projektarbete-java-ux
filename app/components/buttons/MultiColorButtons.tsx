import { useEffect, useState } from "react";
import { CustomButton } from "./CustomButton"; // Import button component
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utilities/localStorageUtils";

const weekDays = [
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
  "Söndag",
];

export function MultiColorButtons() {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const items =
      loadFromLocalStorage("weekColors") ||
      Array(weekDays.length).fill("#ffffff");
    setColors(items);
  }, []);

  // Save colors to localStorage whenever they change
  useEffect(() => {
    if (colors.length > 0) {
      saveToLocalStorage("weekColors", colors);
    }
  }, [colors]); // This will save to localStorage every time colors change

  function changeColor(index: number) {
    setColors((prevColors) => {
      const newColors = [...prevColors];

      if (newColors[index] === "#ffffff") {
        newColors[index] = "#c5fcc3";
      } else if (newColors[index] === "#c5fcc3") {
        newColors[index] = "#ffa2a2";
      } else {
        newColors[index] = "#ffffff";
      }

      return newColors;
    });
    saveToLocalStorage("weekColors", colors);
  }

  return (
    <div className="button-container">
      {weekDays.map((day, index) => (
        <CustomButton
          key={day}
          buttonText={day}
          onClick={() => changeColor(index)}
          style={{ backgroundColor: colors![index] }}
        />
      ))}
    </div>
  );
}
