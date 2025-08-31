import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/MDX/CodeBlock";
import Highlight from "@/components/MDX/Highlight";
import MDXImage from "@/components/MDX/MDXImage";

export const mdxComponents: MDXComponents = {
  // Components for mdx contents style
  CodeBlock,
  Highlight,
  img: MDXImage,

  // Custom Components
}