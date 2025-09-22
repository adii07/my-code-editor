import styles from "./index.module.css";
type Props={
    output?:string;
}
const OutputScreen = ({output}:Props) => {
    return <div className={styles.outputScreen}>{output}</div>
}

export default OutputScreen;