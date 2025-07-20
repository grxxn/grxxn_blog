// 글 목록 + 메타데이터 조회

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

export interface Post {
  seq: number;
  fileName: string;
  title: string;
  desc: string;
  publishedAt: string;
  conts: string;
  tags?: string[];
}

export const postsDirectory = path.join(process.cwd(), "posts");

// 포스트 목록 조회
export const getPostList = cache(() => {
  const folderNm = fs.readdirSync(postsDirectory);

  return folderNm.map((file) => {
    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return data as Post;
  }).sort((a, b) => (a.seq < b.seq ? 1 : -1))
})

// 포스트 상세 조회
export const getPostDetail = (seq: number): Post => {
  const postList = getPostList();
  const postMeta = postList.find((post) => post.seq === Number(seq));

  if (!postMeta) throw new Error("해당 SEQ의 게시글이 없습니다.");

  const filePath = path.join(postsDirectory, `${postMeta.fileName}.mdx`);
  const fileConts = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileConts)

  return { conts: content, ...data } as Post;
}