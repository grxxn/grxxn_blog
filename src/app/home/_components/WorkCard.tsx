"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WorkCardModal } from "./WorkCardModal";

const TAGS = ["Next.js", "TypeScript", "Vercel", "TailwindCSS"];

export const WorkCard = ({ index }: { index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const num = String(index).padStart(2, "0");

  return (
    <>
      <div
        className="border-t border-neutral-200 group cursor-pointer"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* 기본 행 */}
        <div className="flex items-center gap-8 py-7">
          <span className="font-monoCustom text-neutral-400 text-sm w-8 shrink-0">
            {num}
          </span>
          <h3 className="font-monoCustom font-bold text-4xl flex-1 transition-colors duration-200 group-hover:text-green-500">
            GRXXN&apos;S BLOG
          </h3>
          <span className="font-monoCustom text-neutral-400 text-sm shrink-0">
            2024
          </span>
          <motion.span
            animate={{ rotate: expanded ? -90 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="font-monoCustom text-xl shrink-0 inline-block transition-colors duration-200 group-hover:text-green-500"
          >
            →
          </motion.span>
        </div>

        {/* 확장 영역 */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex gap-10 pb-8 pl-16">
                {/* 좌측: 타이틀 + 설명 + 태그 + 버튼 */}
                <div className="flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
                      개인 프로젝트, 개발 회고, 회사의 기술 등 다양한 내용을
                      기록하는 공간입니다.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {TAGS.map((tag) => (
                        <span
                          key={tag}
                          className="font-monoCustom text-xs px-2 py-1 border border-neutral-200 rounded text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="self-start font-monoCustom text-sm font-bold px-6 py-2.5 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:text-white transition-colors"
                  >
                    Open Case →
                  </button>
                </div>

                {/* 우측: 썸네일 */}
                <div className="shrink-0">
                  <Image
                    src="/images/post_250830/result.png"
                    alt="grxxn's blog preview"
                    width={400}
                    height={260}
                    className="w-[400px] h-[220px] object-cover rounded-xl border border-neutral-100"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <WorkCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
