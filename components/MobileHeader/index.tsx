import styles from "./index.module.css";
type MobileHeaderProps = {
    selectedTab: "input" | "output";
    setSelectedTab: (tab: "input" | "output") => void;
}
const MobileHeader = ({ selectedTab, setSelectedTab }: MobileHeaderProps) => {
    return (
        <div className={styles.mobile_header}>
            <div className={styles.mobile_button_container}>
            <button className={`${styles.mobile_button} ${selectedTab === "input" ? styles.selected : ""}`} onClick={() => setSelectedTab("input")}>Input</button>
            <button className={`${styles.mobile_button} ${selectedTab === "output" ? styles.selected : ""}`} onClick={() => setSelectedTab("output")}>Output</button>
            </div>
        </div>
    );
}

export default MobileHeader;