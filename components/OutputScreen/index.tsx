import EditorHeader from "../Header";
import styles from "./index.module.css";
type Props={
    output?:string;
    setOutput: React.Dispatch<React.SetStateAction<string>>;
}
const OutputScreen = ({output,setOutput}:Props) => {

    const clearOutput=()=>{
        setOutput("");
    }
    return <div className={styles.outputScreen}>
        <EditorHeader title={"Output"} buttonText={"Clear"} clickRun={clearOutput} />
        <div className={styles.outputContent}>
        {output}
        </div>
        
        </div>
}

export default OutputScreen;