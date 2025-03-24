import { useState, useEffect } from "react";
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorageUtils";

export function useColors(
  numButtons: number,
  initialColor: string = "#f5f5f5"
) {
  // Sätt ett initialt värde (utan att läsa från localStorage direkt)
  const [colors, setColors] = useState<string[]>(
    Array(numButtons).fill(initialColor)
  );
  const [isClient, setIsClient] = useState(false); // Kontrollera om vi är på klienten

  useEffect(() => {
    setIsClient(true); // Markera att vi nu är på klienten
    const savedColors = loadFromLocalStorage("weekColors");
    if (savedColors) {
      setColors(savedColors);
    }
  }, []);

  const changeColor = (index: number) => {
    setColors((prevColors) => {
      const newColors = prevColors.map((color, i) =>
        i === index
          ? color === "#f5f5f5"
            ? "#c5fcc3"
            : color === "#c5fcc3"
            ? "#ffa2a2"
            : "#f5f5f5"
          : color
      );
      saveToLocalStorage("weekColors", newColors);
      return newColors;
    });
  };

  // Returnera `null` om vi fortfarande är på servern för att undvika mismatch
  if (!isClient) {
    return {
      colors: Array(numButtons).fill(initialColor),
      changeColor: () => {},
    };
  }

  return { colors, changeColor };
}
