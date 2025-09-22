import styles from "./index.module.css";
type Props={
    clickRun?:()=>void;
}
const EditorHeader=({clickRun}:Props)=>{
return <div className={styles.editorHeader}>
    <button className={styles.button} onClick={clickRun}>Run</button>
</div>
}

export default EditorHeader;