// 글 목록 + 메타데이터 조회

import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface Post {
  seq: number;
  title: string;
  desc: string;
  publishedAt: string;
  conts: string;
  tags?: string[];
}

export const postsDirectory = path.join(process.cwd(), "posts");

// 포스트 목록 조회
export function getPostList(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileNm) => {
      const filePath = path.join(postsDirectory, fileNm);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return data as Post;
    })
    .sort((a, b) => (a.seq < b.seq ? 1 : -1));
}

// 포스트 상세 조회
export function getPostDetail(seq: number): Post {
  const filePath = path.join(postsDirectory, `post-${seq}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContents);

  return { conts: content, ...data } as Post;
}
