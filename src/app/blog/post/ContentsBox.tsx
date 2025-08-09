import { MDXRemote } from "next-mdx-remote/rsc";
import { IoShareSocial } from "react-icons/io5";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { Post } from "../../../../lib/posts";
import LikeButton from "./LikeButton";

const ContentBox = async ({
  post
}: {
  post: Post;
}) => {

  return (
    <section className="border rounded-xl min-h-full w-full p-8">
      <div className="mb-10">
        <h3 className="font-bold text-4xl/snug mb-1 text-gray-800 dark:text-gray-100">
          {post.title}
        </h3>
        <div>
          <span className="text-sm font-bold mr-3 text-gray-800 dark:text-gray-100">
            grxxn
          </span>
          <span className="text-sm font-bold mr-3 text-gray-800 dark:text-gray-100">
            •
          </span>
          <span className="text-sm text-gray-500">{post.publishedAt}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 mt-4">
            {post.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-green-600 bg-green-50 border border-green-600 rounded-full px-2 py-1"
              >
                # {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 border rounded-full flex justify-center items-center hover:border-green-600">
              <IoShareSocial />
            </button>
            {/* <LikeButton /> */}
          </div>
        </div>
        <div className="border-b mt-5"></div>
      </div>
      <article className="prose prose-lg dark:prose-invert leading-7 text-gray-800 dark:text-gray-100 max-w-none">
        <MDXRemote
          source={post.conts}
          options={{
            parseFrontmatter: true,
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode]],
            },
          }}
        />
      </article>
      <div className="border-b my-10"></div>
      <div className="comments">
        <p>Comment section</p>
      </div>
    </section>
  );
};

export default ContentBox;
