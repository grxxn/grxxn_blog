"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;

export default function CursorEffect() {
  const mainRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positions = useRef<{ x: number; y: number }[]>([]);
  const mousePos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      const current = mousePos.current;

      positions.current.unshift({ x: current.x, y: current.y });
      if (positions.current.length > TRAIL_LENGTH) {
        positions.current.length = TRAIL_LENGTH;
      }

      if (mainRef.current) {
        mainRef.current.style.transform = `translate(${current.x}px, ${current.y}px)`;
      }

      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const pos = positions.current[i + 1];
        if (!pos) return;
        el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const baseSize = 18;

  return (
    <>
      {/* 메인 커서 원 */}
      <div
        ref={mainRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          width: baseSize,
          height: baseSize,
          marginLeft: -baseSize / 2,
          marginTop: -baseSize / 2,
          borderRadius: "50%",
          backgroundColor: "rgba(74, 222, 128, 0.45)",
          filter: "blur(6px)",
          willChange: "transform",
        }}
      />

      {/* 잔상 원들 */}
      {Array.from({ length: TRAIL_LENGTH - 1 }).map((_, i) => {
        const progress = (i + 1) / TRAIL_LENGTH;
        const size = baseSize * (1 - progress * 0.55);
        const opacity = 0.35 * (1 - progress);
        const blur = 4 + progress * 6;

        return (
          <div
            key={i}
            ref={(el) => {
              trailRefs.current[i] = el;
            }}
            className="pointer-events-none fixed left-0 top-0 z-[9998]"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              borderRadius: "50%",
              backgroundColor: `rgba(74, 222, 128, ${opacity})`,
              filter: `blur(${blur}px)`,
              willChange: "transform",
            }}
          />
        );
      })}
    </>
  );
}
