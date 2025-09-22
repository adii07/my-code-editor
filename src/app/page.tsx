"use client";
import Editor from "../../components/Editor";
import OutputScreen from "../../components/OutputScreen";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Editor/>
      <OutputScreen/>
    </div>
  );
}
