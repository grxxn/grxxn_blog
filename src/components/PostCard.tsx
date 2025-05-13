import Link from "next/link";
import React from "react";

interface PostCardProps {
  seq: number;
  title: string;
  desc: string;
  tags: string[];
}

const PostCard = ({ seq, title, desc, tags }: PostCardProps) => {
  const tagArr = ["React", "Next.js", "TypeScript"];

  return (
    <Link
      href={`/post?seq=${seq}`}
      className="border rounded-xl w-full border-black/[.2] p-6 px-7 flex gap-4 hover:border-green-600 cursor-pointer mb-4"
    >
      <div className="preview-sec bg-green-50 w-44 h-44"></div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="title font-bold text-lg">
            명시적 변환, 암시적 변환, Nominal, 구조화, 덕 타이핑 {title}
          </p>
          <p className="desc text-sm text-gray-500 mt-2">
            자바스크립트는 동적 타이핑 언어로, 변수를 선언할 때 타입을 명시하지
            않아도 된다. 하지만, 타입을 명시적으로 변환하거나 암시적으로
            변환하는 방법이 있다. {desc}
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          {tagArr.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-green-600 bg-green-50 border border-green-600 rounded-full px-2 py-1"
            >
              # {tag}
            </span>
          ))}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-green-600 bg-green-50 border border-green-600 rounded-full px-2 py-1"
            >
              # {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
