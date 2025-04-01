import styles from "~/components/buttons/StickyButton.module.css";
import React from "react";

interface StickyButtonProps {
    buttonText: string
    onClick: () => void
    style?: React.CSSProperties;
}

export function StickyButton({ buttonText, onClick,style }: StickyButtonProps) {

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.btn} onClick={onClick} style={style}>
                <p className={styles.btnText}>{buttonText}</p>
            </button>
        </div>
    );
}
