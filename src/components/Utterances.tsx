"use client";

import { useEffect, useRef } from "react";

export default function Utterances() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(function initializeUtterances() {
    const element = containerRef.current;
    if (!element) return;
    if (element.childNodes.length > 0) return; // StrickMode 중복주입 방지

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("repo", "grxxn/grxxn_blog");
    script.setAttribute("issue-term", "url");
    script.setAttribute("label", "💬 Comment");
    script.setAttribute("theme", "preferred-color-scheme");

    element.appendChild(script);
  }, []);

  return <div ref={containerRef} />;
}

// SCRIPT
{/* <script src="https://utteranc.es/client.js"
        repo="grxxn/grxxn_blog"
        issue-term="url"
        label="💬 Comment"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
</script> */}