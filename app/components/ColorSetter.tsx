import { useState } from "react";

export function useColor(initialColor: string = "white") {
    const [color, setColor] = useState(initialColor);

    const changeColor = () => {
        console.log("Changing color");
        setColor((prevColor) =>
            prevColor === "white" ? "green" : prevColor === "green" ? "red" : "white"
        );
    };

    return { color, changeColor };
}
