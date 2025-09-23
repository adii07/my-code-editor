import styles from "./index.module.css";
type Props={
    clickRun?:()=>void;
    title:string;
    buttonText:string;
}
const EditorHeader=({clickRun,title,buttonText}:Props)=>{
    const variant= buttonText==="Run"?"primary":"secondary";
return <div className={styles.editorHeader}>
    <div className={styles.title}>{title}</div>
    <button className={`${styles.button} ${styles[variant]}`} onClick={clickRun}>{buttonText}</button>
</div>
}

export default EditorHeader;