import { useState } from "react";
import styles from "./index.module.css";
import { placeHolderText } from "./const";
import EditorHeader from "../Header";

type Props = {
    setOutput: React.Dispatch<React.SetStateAction<string>>;
}
const Editor = ({ setOutput }: Props) => {

    const [javaScriptCode, setJavaScriptCode] = useState(placeHolderText);

    const runCode = () => {
        try {
            const logs: string[] = [];
            const originalConsoleLog = console.log;
            // Capture console.log
            console.log = (...args) => logs.push(args.join(" "));

            // Execute JS code
            new Function(javaScriptCode)();
            // Restore console.log
            console.log = originalConsoleLog;
            setOutput(logs.join("\n"));
        }
        catch (err) {
            setOutput(String(err));
        }
    }
    return (
        <div className={styles.editor}>
            <EditorHeader clickRun={runCode} title={"Input"} buttonText={"Run"} />
            <textarea className={styles.textarea} value={javaScriptCode} onChange={(e) => setJavaScriptCode(e.target.value)}
                placeholder="" />
        </div>
    );
}

export default Editor;