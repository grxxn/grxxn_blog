"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface WorkCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkCardModal = ({ isOpen, onClose }: WorkCardModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className="pointer-events-auto w-[1080px] h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header image */}
              <div className="relative w-full h-72 flex-shrink-0 bg-gray-50">
                <Image
                  src="/images/post_250830/result.png"
                  alt="grxxn's blog preview"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-500 hover:text-gray-800 hover:bg-white transition-all shadow"
                  aria-label="닫기"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-4 flex-1 overflow-hidden">
                <h2 className="font-monoCustom font-bold text-3xl">
                  grxxn&apos;s blog
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  개인 프로젝트, 개발 회고, 회사의 기술 등 다양한 회고를
                  기록하는 공간입니다.
                </p>

                {/* Badges */}
                <div className="flex gap-2 flex-wrap">
                  {["Next.js", "TypeScript", "Vercel", "tailwindCSS"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-sm font-monoCustom px-3 py-1 rounded-full border bg-green-50 border-green-200 text-green-600"
                      >
                        # {tag}
                      </span>
                    ),
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href="https://grxxn.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-monoCustom font-bold rounded-full py-3 text-sm text-white bg-gray-900 hover:bg-gray-700 transition-colors"
                  >
                    Visit Site →
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 font-monoCustom font-bold rounded-full py-3 text-sm text-gray-700 border border-gray-200 bg-gradient-to-b from-white to-gray-100 hover:to-gray-200 hover:border-gray-300 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
