import styles from "./main.module.css";

export function Main() {
    return (
        <main>
            <div>
                <h2>Mars</h2>
                <div className={styles.monthlyContainer}>
                    <p>Den här månaden har du tjänat</p>
                    <p>15000 kr</p>
                </div>
            </div>

            <div className="button-container">

            </div>
        </main>
    );
}