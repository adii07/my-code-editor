import { usePathname } from "next/navigation";
import styles from "./index.module.css";

const Selector = () => {

    const languages = ["JavaScript", "TypeScript"];
    const pathname = usePathname();
    const redirect = (lang: string) => {
        switch (lang) {
            case "JavaScript":
                window.location.href = "/javascript";
                break;
            case "TypeScript":
                window.location.href = "/typescript";
                break;
            default:
                window.location.href = "/javascript";
        }
    }

    const getTitle = (lang: string) => {
        switch (lang) {
            case "JavaScript":
                return "JS";
            case "TypeScript":
                return "TS";
            default:
                return "JS";
        }
    }

    return (
        <div className={styles.selector}>
            {languages.map((lang) => (
                <div key={lang} className={pathname.includes(lang.toLowerCase()) ? `${styles.language} ${styles.active}` : styles.language} onClick={() => redirect(lang)}>{getTitle(lang)}</div>
            ))}
        </div>
    )
}
export default Selector;