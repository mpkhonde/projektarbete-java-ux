import styles from "~/components/CustomButton.module.css";
import React from "react";

interface CustomButtonProps {
    buttonText: string
    onClick: () => void
    style?: React.CSSProperties;
}

export function CustomButton({ buttonText, onClick,style }: CustomButtonProps) {
    return (
        <div className={styles.flexContainer}>
            <button className={styles.btn} onClick={onClick} style={style}>
                <p className={styles.btnTextColor}>{buttonText}</p>
            </button>
        </div>
    );
}
