import { useEffect, useState } from "react";
import { CustomButton } from "./CustomButton"; // Import button component
import { saveToLocalStorage, loadFromLocalStorage } from "./utilities/localStorageUtils";
import {Link} from "react-router";

const weekDays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

export function MultiColorButtons() {
  const [colors, setColors] = useState<string[]>(loadFromLocalStorage("weekColors") || Array(weekDays.length).fill("#f5f5f5"));

  useEffect(() => {
    saveToLocalStorage("weekColors", colors);
  }, [colors]); // Spara när colors ändras

  function changeColor(index: number) {
    setColors((prevColors) => {
      const newColors = [...prevColors];

      if (newColors[index] === "#f5f5f5") {
        newColors[index] = "#c5fcc3";
      } else if (newColors[index] === "#c5fcc3") {
        newColors[index] = "#ffa2a2";
      } else {
        newColors[index] = "#f5f5f5";
      }

      return newColors;
    });
  }

  return (
    <div>
      {weekDays.map((day, index) => (
        <CustomButton
          key={day}
          buttonText={day}
          onClick={() => changeColor(index)}
          style={{ backgroundColor: colors[index] }}
        />
      ))}

        <Link to={"/main"}>
        <CustomButton
            buttonText={"Spara"}
            onClick={() => alert("Sparat")}

        />
        </Link>
    </div>
  );
}
