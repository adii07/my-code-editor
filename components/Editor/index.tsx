import styles from "./index.module.css";
import EditorHeader from "../EditorHeader";

type Props = {
    setOutput: React.Dispatch<React.SetStateAction<string>>;
    javaScriptCode: string;
    setJavaScriptCode: React.Dispatch<React.SetStateAction<string>>;
}
const Editor = ({ setOutput, javaScriptCode, setJavaScriptCode }: Props) => {

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
            logs.push("\n\n=== Code Execution Successful ===");
            setOutput(logs.join("\n"));
        }
        catch (err: unknown) {
            const logs: string[] = [];
            if (err instanceof Error) {
                logs.push(`Error: ${err.message}`);
            } else {
                logs.push(`Error: ${String(err)}`);
            }
            logs.push("\n=== Code Execution Failed ===");
            setOutput(logs.join("\n"));
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