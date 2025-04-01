import styles from "~/components/buttons/CustomButton.module.css";
import React from "react";

interface CustomButtonProps {
  buttonText: string;
  onClick: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  icon?: string;  // Lägg till en prop för ikonen
}

export function CustomButton({
  buttonText,
  onClick,
  style,
  disabled,
  className = "",
  icon,
}: CustomButtonProps) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.btn} ${className}`}
        onClick={onClick}
        style={style}
        disabled={disabled}
      >
        {icon && <img src={icon} alt="ikon" className={styles.lockIcon} />}
        <p className={styles.btnText}>{buttonText}</p>
      </button>
    </div>
  );
}
