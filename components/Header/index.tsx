"use client";
import { redirectToLinkedin } from "../../helper/linkedinRedirection";
import { useWindowSize } from "../../hooks/isDesktop";
import styles from "./index.module.css"

const Header=()=>{
    const {isDesktop}=useWindowSize();
    
return (<div className={styles.header}>
    <div className={styles.title}>
        <h2 className={isDesktop?styles.titleText : styles.titleTextMobile} >Code Editor</h2>
    </div>
    <div className={styles.subtitle}>
        <span className={styles.subtitleText1}>Code • Run • Debug</span>
        <span className={styles.subtitleText2} onClick={redirectToLinkedin}>By Aditya Sharma</span>
    </div>
</div>)
}

export default Header;