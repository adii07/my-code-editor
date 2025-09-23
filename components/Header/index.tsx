"use client";
import { usePathname } from "next/navigation";
import { useWindowSize } from "../../hooks/isDesktop";
import styles from "./index.module.css"
import { useEffect, useState } from "react";

const Header=()=>{
    const {isDesktop}=useWindowSize();
    const[title,setTitle]=useState("JavaScript Playground");
    const pathname = usePathname();
    useEffect(()=>{
        if(pathname.includes("typescript")){
            setTitle("TypeScript Playground");
        }else{
            setTitle("JavaScript Playground");
        }
    },[pathname])

    const redirectToLinkedin=()=>{
        window.open("https://www.linkedin.com/in/aditya-sharma-693244171/","_blank")
    }
    
return (<div className={isDesktop?styles.header: styles.headerMobile}>
    <div className={styles.title}>
        <h2 className={isDesktop?styles.titleText : styles.titleTextMobile} >{title}</h2>
    </div>
    {isDesktop && <div className={styles.subtitle}>
        <span className={styles.subtitleText1}>Code • Run • Debug</span>
        <span className={styles.subtitleText2} onClick={redirectToLinkedin}>By Aditya Sharma</span>
    </div>}
</div>)
}

export default Header;