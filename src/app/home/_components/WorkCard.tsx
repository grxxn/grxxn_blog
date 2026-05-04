"use client";

import Image from "next/image";
import { useState } from "react";
import { WorkCardModal } from "./WorkCardModal";

const Badge = ({ text }: { text: string }) => (
  <span className="text-sm font-monoCustom px-2 py-1 rounded-full border bg-green-50 border-green-200 text-green-600">
    {text}
  </span>
);

export const WorkCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group card max-w-[1080px] mx-auto flex gap-8 border border-gray-200 rounded-2xl pr-3 pl-10 py-3 shadow-[0_2px_0_0_#e5e7eb,0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-200 overflow-hidden relative cursor-pointer">
        {/* 호버 시 하단 그라데이션 */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-green-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

        <div className="py-10 flex-1 flex flex-col gap-3 relative z-10">
          <h3 className="font-monoCustom font-bold text-[40px]">grxxn's blog</h3>
          <p className="text-base">
            개인 프로젝트, 개발 회고, 회사의 기술 등 다양한 회고를 기록하는
            공간입니다.
          </p>
          <div className="flex gap-2 flex-wrap mt-3">
            <Badge text="# Next.js" />
            <Badge text="# TypeScript" />
            <Badge text="# Vercel" />
            <Badge text="# tailwindCSS" />
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-16 font-monoCustom font-bold w-full rounded-full cursor-pointer py-3 text-sm text-gray-700 border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.06)] hover:to-gray-200 hover:border-gray-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_3px_0_#e2e5e9,0_4px_8px_-1px_rgba(0,0,0,0.02)] active:translate-y-0.5 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.08),0_1px_0_#d4d8de] transition-all duration-150"
          >
            Open Case
          </button>
        </div>
        <Image
          src="/images/post_250830/result.png"
          alt=""
          width={600}
          height={500}
          className="relative z-10 w-full max-w-2xl h-auto"
        />
      </div>

      <WorkCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
