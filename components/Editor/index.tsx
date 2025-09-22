import { useState } from "react";
import styles from "./index.module.css";
const Editor = () => {

    const [javaScriptCode, setJavaScriptCode] = useState("");
    return <textarea className={styles.editor} value={javaScriptCode} onChange={(e) => setJavaScriptCode(e.target.value)} 
    placeholder="Write your JavaScript code here..." />;
}

export default Editor;