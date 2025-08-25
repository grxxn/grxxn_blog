import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "./mdx-components";

const prettyCodeOptions: Options = {
  theme: {
    light: "github-light",
    dark: 'github-dark-dimmed',
  },
  keepBackground: false,  // 배경색 사이트 테마에 맞추고싶을 때 
  bypassInlineCode: false, // 인라인 코드도 하이라이트
  defaultLang: { block: "tsx", inline: "tsx" } // 언어 미지정 시 기본값
}

export default function MDXContent({ source }: { source: string }) {
  return (
    <article className="prose prose-neutral dark:prose-invert mex-w-none">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
          }
        }}
      />
    </article>
  )
}