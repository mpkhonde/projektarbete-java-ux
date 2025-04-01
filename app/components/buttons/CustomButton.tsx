import styles from "~/components/buttons/CustomButton.module.css";
import React from "react";

interface CustomButtonProps {
    buttonText: string;
    onClick: () => void;
    style?: React.CSSProperties;
    disabled?: boolean;
    className?: string; 
}

export function CustomButton({ buttonText, onClick, style, disabled, className = "" }: CustomButtonProps) {
    return (
        <div className={styles.buttonContainer}>
            <button className={`${styles.btn} ${className}`} onClick={onClick} style={style} disabled={disabled}>
                <p className={styles.btnText}>{buttonText}</p>
            </button>
        </div>
    );
}
