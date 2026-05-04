"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variantStyles = {
  blue: "bg-blue-50/60 border-blue-200/70 text-blue-500/80",
  violet: "bg-violet-50/60 border-violet-200/70 text-violet-500/80",
  rose: "bg-rose-50/60 border-rose-200/70 text-rose-500/80",
};

const TechBadge = ({
  tech,
  variant,
}: {
  tech: string;
  variant: keyof typeof variantStyles;
}) => (
  <span
    className={`block text-center text-lg font-monoCustom px-3 py-2 rounded-md border ${variantStyles[variant]}`}
  >
    {tech}
  </span>
);

const SVG_DELAY = 0.75;
// stiffness 800, damping 20, mass 2 기준 svg가 y=0 첫 도달 ~0.07s
const SHAKE_TRIGGER = SVG_DELAY + 0.07;

const dropTransition = (delay: number) => ({
  type: "spring" as const,
  stiffness: 500,
  damping: 20,
  mass: 0.8,
  delay,
});

// 요소별 고유 흔들림 패턴 — [h4, li[0], li[1], li[2]]
const shakePatterns: { x: number[]; y: number[]; delay: number }[] = [
  { x: [0, -8, 6, -3, 1, 0], y: [0, 4, -5, 2, 0, 0], delay: SHAKE_TRIGGER },
  {
    x: [0, 8, -5, 3, -1, 0],
    y: [0, -5, 3, -2, 1, 0],
    delay: SHAKE_TRIGGER + 0.02,
  },
  {
    x: [0, -5, 8, -4, 2, 0],
    y: [0, 5, -6, 3, -1, 0],
    delay: SHAKE_TRIGGER + 0.05,
  },
  {
    x: [0, 6, -7, 4, -2, 0],
    y: [0, -4, 5, -3, 1, 0],
    delay: SHAKE_TRIGGER + 0.03,
  },
];

// drop용 outer + shake용 inner로 레이어 분리
const Dropped = ({
  dropDelay,
  shakeIdx,
  inView,
  className,
  children,
}: {
  dropDelay: number;
  shakeIdx: number;
  inView: boolean;
  className?: string;
  children: React.ReactNode;
}) => {
  const pattern = shakePatterns[shakeIdx];
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={dropTransition(dropDelay)}
      className={className}
    >
      <motion.div
        animate={inView ? { x: pattern.x, y: pattern.y } : { x: 0, y: 0 }}
        transition={{ duration: 0.45, delay: pattern.delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const SkillColumn = ({
  icon,
  alt,
  title,
  techs,
  baseDelay = 0,
  inView,
  variant,
}: {
  icon: string;
  alt: string;
  title: string;
  techs: string[];
  baseDelay?: number;
  inView: boolean;
  variant: keyof typeof variantStyles;
}) => {
  const liDelays = techs.map(
    (_, i) => baseDelay + (techs.length - 1 - i) * 0.18,
  );
  const h4Delay = baseDelay + 0.55;

  return (
    <div className="flex flex-col items-center w-full">
      {/* svg — 맨 마지막 낙하, 착지 squash. key로 매 진입마다 재마운트 */}
      <motion.div
        key={inView ? 1 : 0}
        initial={{ y: -200, opacity: 0, scaleY: 1 }}
        animate={
          inView
            ? { y: 0, opacity: 1, scaleY: [1, 0.7, 1.2, 0.92, 1] }
            : { y: -200, opacity: 0, scaleY: 1 }
        }
        transition={{
          y: {
            type: "spring",
            stiffness: 800,
            damping: 20,
            mass: 2,
            delay: SVG_DELAY,
          },
          opacity: { delay: SVG_DELAY, duration: 0.04 },
          scaleY: {
            duration: 0.35,
            delay: SHAKE_TRIGGER,
            ease: "easeOut",
            times: [0, 0.25, 0.55, 0.8, 1],
          },
        }}
        style={{ transformOrigin: "bottom center" }}
        className="mb-4"
      >
        <Image src={icon} alt={alt} width={70} height={70} />
      </motion.div>

      {/* h4 */}
      <Dropped
        dropDelay={h4Delay}
        shakeIdx={0}
        inView={inView}
        className="mb-9"
      >
        <h4 className="font-monoCustom font-bold text-2xl">{title}</h4>
      </Dropped>

      {/* li items */}
      <ul className="flex flex-col gap-8 w-full">
        {techs.map((tech, i) => (
          <li key={tech}>
            <Dropped dropDelay={liDelays[i]} shakeIdx={i + 1} inView={inView}>
              <TechBadge tech={tech} variant={variant} />
            </Dropped>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-300px 0px" });

  return (
    <section ref={ref} className="w-full flex justify-center mb-16">
      <div className="max-w-[1080px] w-full border border-gray-200 rounded-3xl p-10 grid grid-cols-3 gap-8 bg-[#fefefe] shadow-[0_2px_0_0_#e5e7eb,0_8px_24px_-4px_rgba(0,0,0,0.08)]">
        <SkillColumn
          icon="/images/icons/gear-svgrepo-com.svg"
          alt="Core"
          title="Core"
          techs={["React.js", "Next.js", "TypeScript"]}
          inView={inView}
          variant="blue"
        />
        <SkillColumn
          icon="/images/icons/data-accesskafka-cluster-svgrepo-com.svg"
          alt="State Management"
          title="State Management"
          techs={["Zustand", "React-Query", "Redux-Toolkit"]}
          inView={inView}
          variant="violet"
        />
        <SkillColumn
          icon="/images/icons/palette-color-svgrepo-com.svg"
          alt="Styling"
          title="Styling"
          techs={["TailwindCSS", "Styled-components", "Material-UI"]}
          inView={inView}
          variant="rose"
        />
      </div>
    </section>
  );
};
