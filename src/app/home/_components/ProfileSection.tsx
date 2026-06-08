"use client";
import { useEffect, useRef, ReactNode, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

type HoveredItem = "email" | "github" | "linkedin" | null;

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@._-!#$%";

function useScramble(finalText: string, startDelay = 0, trigger = 0) {
  const [output, setOutput] = useState(finalText);

  useEffect(() => {
    const duration = 1200;
    let rafId: number;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedCount = Math.floor(progress * finalText.length);

      setOutput(
        finalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealedCount) return char;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("")
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setOutput(finalText);
      }
    };

    const timeout = setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [finalText, startDelay, trigger]);

  return output;
}

function FitText({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fit = () => {
      text.style.fontSize = "100px";
      const containerWidth = container.offsetWidth;
      const textWidth = text.scrollWidth;
      if (textWidth > 0) {
        text.style.fontSize = `${(containerWidth / textWidth) * 100}px`;
        setVisible(true);
      }
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full transition-opacity duration-300",
        !visible && "opacity-0",
        onClick && "cursor-pointer",
      )}
      onClick={onClick}
    >
      <span
        ref={textRef}
        className={cn(
          "inline-block font-black whitespace-nowrap leading-none",
          className,
        )}
      >
        {children}
      </span>
    </div>
  );
}

export default function ProfileSection() {
  const [hovered, setHovered] = useState<HoveredItem>(null);
  const [scrambleTrigger, setScrambleTrigger] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = () => {
      const delay = 8000 + Math.random() * 4000;
      timeoutId = setTimeout(() => {
        setScrambleTrigger((v) => v + 1);
        schedule();
      }, delay);
    };

    // 초기 스크램블 완료 후 첫 재스크램블 예약
    timeoutId = setTimeout(schedule, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const nameText = useScramble("Jeon Young Joo", 0, scrambleTrigger);
  const titleText = useScramble("FRONTEND ENGINEER", 0, scrambleTrigger);
  const emailText = useScramble("devgrxxn@gmail.com", 0, scrambleTrigger);
  const githubText = useScramble("GITHUB", 0, scrambleTrigger);
  const linkedinText = useScramble("LINKEDIN", 0, scrambleTrigger);

  const handleCopyEmail = async () => {
    const EMAIL = "devgrxxn@gmail.com";
    try {
      await navigator.clipboard.writeText(EMAIL);
      alert("📋 이메일이 복사되었습니다.");
    } catch (err) {
      console.error("이메일 복사 실패", err);
    }
  };

  const linkRowActive = hovered === "github" || hovered === "linkedin";

  return (
    <section className="relative w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      {/* 오버레이 */}
      <div
        className={cn(
          "absolute inset-0 z-10 pointer-events-none",
          "bg-white/70 dark:bg-black/70",
          "transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="w-2/4 flex flex-col gap-3 text-neutral-700">
        <FitText className="font-monoCustom">{nameText}</FitText>
        <FitText className="font-monoCustom">{titleText}</FitText>

        {/* 이메일 */}
        <div
          className={cn(
            "relative transition-[transform,color] duration-200 origin-left",
            hovered === "email"
              ? "z-20 scale-[1.03] text-green-400"
              : "z-0 scale-100",
          )}
          onMouseEnter={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
        >
          <FitText onClick={handleCopyEmail} className="font-monoCustom">
            {emailText}
          </FitText>
        </div>

        {/* GitHub / LinkedIn */}
        <div
          className={cn("relative", linkRowActive ? "z-20" : "z-0")}
          onMouseLeave={() => setHovered(null)}
        >
          <FitText className="font-monoCustom">
            <a
              href="https://github.com/grxxn"
              target="_blank"
              onMouseEnter={() => setHovered("github")}
              className={cn(
                "inline-flex items-center gap-[0.2em]",
                "transition-[opacity,transform,color] duration-200 origin-left",
                hovered === "github"
                  ? "scale-[1.05] text-green-400"
                  : "scale-100",
                hovered === "linkedin" ? "opacity-25" : "opacity-100",
              )}
            >
              <FaArrowRight />
              {githubText}
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/%EC%98%81%EC%A3%BC-%EC%A0%84-136b662b4/"
              target="_blank"
              onMouseEnter={() => setHovered("linkedin")}
              className={cn(
                "inline-flex items-center gap-[0.2em]",
                "transition-[opacity,transform,color] duration-200 origin-left",
                hovered === "linkedin"
                  ? "scale-[1.05] text-green-400"
                  : "scale-100",
                hovered === "github" ? "opacity-25" : "opacity-100",
              )}
            >
              <FaArrowRight />
              {linkedinText}
            </a>
          </FitText>
        </div>
      </div>
    </section>
  );
}
