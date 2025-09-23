import styles from "./index.module.css"

const Header=()=>{

    const redirectToLinkedin=()=>{
        window.open("https://www.linkedin.com/in/aditya-sharma-693244171/","_blank")
    }
return (<div className={styles.header}>
    <div className={styles.title}>
        <h2 className={styles.titleText} >JavaScript & TypeScript Playground</h2>
    </div>
    <div className={styles.subtitle}>
        <span className={styles.subtitleText1}>Code • Run • Debug</span>
        <span className={styles.subtitleText2} onClick={redirectToLinkedin}>By Aditya Sharma</span>
    </div>
</div>)
}

export default Header;