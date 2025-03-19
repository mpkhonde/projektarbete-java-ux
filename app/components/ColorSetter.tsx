import { useState } from "react";

export function useColors(numButtons: number, initialColor: string = "#f5f5f5") {
    const [colors, setColors] = useState<string[]>(Array(numButtons).fill(initialColor));

    const changeColor = (index: number) => {
        setColors((prevColors) =>
            prevColors.map((color, i) =>
                i === index ? (color === "#f5f5f5" ? "#c5fcc3" : color === "#c5fcc3" ? "#ffa2a2" : "#f5f5f5") : color
            )
        );
    };

    return { colors, changeColor };
}
