"use client";
import { useEffect, useState } from "react";
import Editor from "../../components/Editor";
import OutputScreen from "../../components/OutputScreen";
import styles from "./page.module.css";
import { useWindowSize } from "../../hooks/isDesktop";
import MobileHeader from "../../components/MobileHeader";

export default function Home() {
  const [output, setOutput] = useState("");
  const { isDesktop } = useWindowSize();
  const [selectedTab, setSelectedTab] = useState<"input" | "output">("input");

  useEffect(() => { if (!isDesktop) setSelectedTab("output") }, [output]);
  return (
    <>
      {isDesktop ? <div className={styles.page}>
        <Editor setOutput={setOutput} />
        <OutputScreen output={output} setOutput={setOutput} />
      </div> :
        <div className={styles.mobile_page} >
          <MobileHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          {selectedTab === "input" && <Editor setOutput={setOutput} />}
          {selectedTab === "output" && <OutputScreen output={output} setOutput={setOutput} />}
        </div>
      }
    </>

  );
}
