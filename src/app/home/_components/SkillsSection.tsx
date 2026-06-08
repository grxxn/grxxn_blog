"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

type LineType = "command" | "blank" | "category" | "item";

const SKILL_LINES: { type: LineType; text: string }[] = [
  { type: "command", text: "$ skills --list" },
  { type: "blank", text: "" },
  { type: "category", text: "[Core]" },
  { type: "item", text: "  → React.js" },
  { type: "item", text: "  → Next.js" },
  { type: "item", text: "  → TypeScript" },
  { type: "blank", text: "" },
  { type: "category", text: "[State Management]" },
  { type: "item", text: "  → Zustand" },
  { type: "item", text: "  → React-Query" },
  { type: "item", text: "  → Redux-Toolkit" },
  { type: "blank", text: "" },
  { type: "category", text: "[Styling]" },
  { type: "item", text: "  → TailwindCSS" },
  { type: "item", text: "  → Styled-components" },
  { type: "item", text: "  → Material-UI" },
];

const PROFILE_LINES: { type: "header" | "divider" | "info"; label: string; value: string }[] = [
  { type: "header", label: "", value: "grxxn@portfolio" },
  { type: "divider", label: "", value: "──────────────────" },
  { type: "info", label: "Role  ", value: "Frontend Engineer" },
  { type: "info", label: "Based ", value: "Seoul, Korea" },
  { type: "info", label: "Exp   ", value: "4+ years" },
  { type: "info", label: "Focus ", value: "React / Next.js" },
  { type: "info", label: "Blog  ", value: "devgrxxn.com" },
  { type: "info", label: "GitHub", value: "github.com/grxxn" },
];

const PALETTE = [
  "#ff5f57", "#febc2e", "#28c840", "#4ade80",
  "#60a5fa", "#a78bfa", "#f472b6", "#94a3b8",
];

const SKILL_INTERVAL = 90;
const PROFILE_INTERVAL = 130;
const PROFILE_DELAY = 200;

export const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-200px 0px" });

  const [skillCount, setSkillCount] = useState(0);
  const [profileCount, setProfileCount] = useState(0);
  const [showPalette, setShowPalette] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  const skillDone = skillCount >= SKILL_LINES.length;
  const profileDone = profileCount >= PROFILE_LINES.length;
  const done = skillDone && profileDone;

  useEffect(() => {
    if (!inView) {
      setSkillCount(0);
      setProfileCount(0);
      setShowPalette(false);
      return;
    }

    let sc = 0;
    const skillIv = setInterval(() => {
      sc++;
      setSkillCount(sc);
      if (sc >= SKILL_LINES.length) clearInterval(skillIv);
    }, SKILL_INTERVAL);

    let pc = 0;
    let profileIv: ReturnType<typeof setInterval> | undefined;
    const profileTimeout = setTimeout(() => {
      profileIv = setInterval(() => {
        pc++;
        setProfileCount(pc);
        if (pc >= PROFILE_LINES.length) {
          clearInterval(profileIv);
          setTimeout(() => setShowPalette(true), 200);
        }
      }, PROFILE_INTERVAL);
    }, PROFILE_DELAY);

    return () => {
      clearInterval(skillIv);
      clearTimeout(profileTimeout);
      clearInterval(profileIv);
    };
  }, [inView]);

  useEffect(() => {
    if (!done) return;
    const iv = setInterval(() => setCursorOn((v) => !v), 530);
    return () => {
      clearInterval(iv);
      setCursorOn(true);
    };
  }, [done]);

  return (
    <section ref={ref} className="w-full flex justify-center mb-16">
      <div className="max-w-[1080px] w-full rounded-xl overflow-hidden shadow-2xl font-monoCustom text-sm">

        {/* 타이틀 바 */}
        <div className="bg-[#2a2a2a] px-4 py-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-4 text-neutral-400 text-xs">~/portfolio — skills</span>
        </div>

        {/* 터미널 바디 */}
        <div className="bg-[#0f0f0f] px-6 py-5 flex gap-6">

          {/* 좌측: 스킬 목록 */}
          <div className="flex-1 leading-7 min-w-0">
            {SKILL_LINES.slice(0, skillCount).map((line, i) => {
              if (line.type === "blank") return <div key={i} className="h-2" />;
              return (
                <div
                  key={i}
                  className={
                    line.type === "command"
                      ? "text-green-400"
                      : line.type === "category"
                        ? "text-yellow-300 font-bold"
                        : "text-neutral-300"
                  }
                >
                  {line.text}
                </div>
              );
            })}

            {skillCount > 0 && (
              <div className="text-green-400 mt-2 flex items-center gap-1">
                <span>$</span>
                <span
                  className="inline-block w-[0.5em] h-[1em] bg-green-400 translate-y-[1px]"
                  style={{ opacity: cursorOn ? 1 : 0 }}
                />
              </div>
            )}
          </div>

          {/* 구분선 */}
          <div className="w-px bg-neutral-700 self-stretch" />

          {/* 우측: neofetch 프로필 */}
          <div className="flex-1 leading-7 min-w-0">
            {PROFILE_LINES.slice(0, profileCount).map((line, i) => (
              <div key={i}>
                {line.type === "header" && (
                  <span className="text-green-400 font-bold">{line.value}</span>
                )}
                {line.type === "divider" && (
                  <span className="text-neutral-600">{line.value}</span>
                )}
                {line.type === "info" && (
                  <span>
                    <span className="text-yellow-300">{line.label}</span>
                    <span className="text-neutral-500"> : </span>
                    <span className="text-neutral-300">{line.value}</span>
                  </span>
                )}
              </div>
            ))}

            {showPalette && (
              <div className="flex gap-1 mt-5">
                {PALETTE.map((color) => (
                  <span
                    key={color}
                    className="inline-block w-4 h-4 rounded-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
