import { useWindowSize } from "../../hooks/isDesktop";
import styles from "./index.module.css"

const Header=()=>{

    const redirectToLinkedin=()=>{
        window.open("https://www.linkedin.com/in/aditya-sharma-693244171/","_blank")
    }
    const {isDesktop}=useWindowSize();
return (<div className={isDesktop?styles.header: styles.headerMobile}>
    <div className={styles.title}>
        <h2 className={isDesktop?styles.titleText : styles.titleTextMobile} >JavaScript & TypeScript Playground</h2>
    </div>
    {isDesktop && <div className={styles.subtitle}>
        <span className={styles.subtitleText1}>Code • Run • Debug</span>
        <span className={styles.subtitleText2} onClick={redirectToLinkedin}>By Aditya Sharma</span>
    </div>}
</div>)
}

export default Header;