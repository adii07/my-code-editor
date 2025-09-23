"use client";
import { useEffect, useState } from "react";
import Editor from "../../../components/Editor";
import OutputScreen from "../../../components/OutputScreen";
import styles from "./page.module.css";
import { useWindowSize } from "../../../hooks/isDesktop";
import MobileHeader from "../../../components/MobileHeader";
import Header from "../../../components/Header";
import { placeHolderText } from "../../../components/Editor/const";
import Selector from "../../../components/Selector";

export default function Home() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState(placeHolderText);
  const { isDesktop } = useWindowSize();
  const [selectedTab, setSelectedTab] = useState<"input" | "output">("input");

  useEffect(() => { if (!isDesktop) setSelectedTab("output") }, [output]);
  return (
    <div className={styles.main_container}>
     <Header/>
      {isDesktop ? <div className={styles.page}>
        <Selector />
        <Editor setOutput={setOutput} javaScriptCode={input} setJavaScriptCode={setInput} />
        <OutputScreen output={output} setOutput={setOutput} />
      </div> :
        <div className={styles.mobile_page} >
          <MobileHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          {selectedTab === "input" && <Editor setOutput={setOutput} javaScriptCode={input} setJavaScriptCode={setInput} />}
          {selectedTab === "output" && <OutputScreen output={output} setOutput={setOutput} />}
        </div>
      }
    </div>

  );
}
