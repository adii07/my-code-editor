import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

const Selector = () => {
    const[selectedLanguage,setSelectedLanguage]=useState("");
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
    const selectLanguage=(lang:string)=>{
        if (lang ==="JavaScript" && pathname!=="/javascript"){
            redirect("JavaScript");
        }
        else if (lang ==="TypeScript" && pathname!=="/typescript"){
            redirect("TypeScript");
        }
    }

    const getLanguageFromPathname = (pathname: string) => {
        switch (pathname) {
            case "/javascript":
                return "JavaScript";
            case "/typescript":
                return "TypeScript";
            default:
                return "";
        }
    }

    useEffect(() => {
        const lang = getLanguageFromPathname(pathname);
        setSelectedLanguage(lang);
    }, [pathname]);
    return (
        <div >
            <select id="language" name="language" className={styles.selector} value={selectedLanguage || ""} onChange={(e) => { selectLanguage(e.target.value) }}>
                <option value="" disabled hidden>
                    Select a language...
                </option>
                <option value="JavaScript">JavaScript</option>
                <option value="TypeScript">TypeScript</option>
            </select>
        </div>
    )
}
export default Selector;