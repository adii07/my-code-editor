"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
    const router = useRouter();
    const redirect = () => {
        router.push("/javascript");
    }
    useEffect(() => { redirect() }, []);
    return (
        <></>
    );
}
