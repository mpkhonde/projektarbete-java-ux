import React from "react";
import { useColors } from "./ColorSetter"; // Import color state management
import { CustomButton } from "./CustomButton"; // Import button component

const weekDays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

export function MultiColorButtons() {
    const { colors, changeColor } = useColors(weekDays.length); // Set state for 7 buttons

    return (
        <div>
            {weekDays.map((day, index) => (
                <CustomButton
                    key={day} // Use day as a key (since it's unique)
                    buttonText={day} // Display the weekday name
                    onClick={() => changeColor(index)} // Change color when clicked
                    style={{ backgroundColor: colors[index] }} // Set background color
                />
            ))}
        </div>
    );
}
