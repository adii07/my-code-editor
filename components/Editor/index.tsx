import { useState } from "react";
import styles from "./index.module.css";
import { placeHolderText } from "./const";
import EditorHeader from "./Header";
const Editor = () => {

    const [javaScriptCode, setJavaScriptCode] = useState(placeHolderText);
    return (
        <div className={styles.editor}>
            <EditorHeader/>
            <textarea className={styles.textarea} value={javaScriptCode} onChange={(e) => setJavaScriptCode(e.target.value)} 
            placeholder="" />
        </div>
    );
}

export default Editor;