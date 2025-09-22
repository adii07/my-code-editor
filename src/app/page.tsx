"use client";
import { useState } from "react";
import Editor from "../../components/Editor";
import OutputScreen from "../../components/OutputScreen";
import styles from "./page.module.css";

export default function Home() {
  const [output, setOutput] = useState("");
  return (
    <div className={styles.page}>
      <Editor setOutput={setOutput} />
      <OutputScreen output={output} />
    </div>
  );
}
