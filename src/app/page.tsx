"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [dark, setIsDark] = useState(false)

  useEffect(() => {
    console.log(dark)
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <>
      <h1 className="text-black dark:text-white">TEST</h1>
      <button onClick={() => setIsDark(!dark)}>BUTTON</button>
    </>
  );
}
