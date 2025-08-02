import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { Post } from "../../lib/posts";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const tagArr = ["React", "Next.js", "TypeScript"];

  return (
    <Link
      href={{ pathname: "/post", query: { seq: post.seq } }}
      className="group border rounded-xl w-full p-6 px-7 flex flex-col gap-0 hover:border-green-600 cursor-pointer mb-4 sm:gap-5"
    >
      <div className="mb-2 sm:mb-4">
        <p className="font-semibold text-2xl group-hover:text-green-600 mb-3  sm:line-clamp-1 sm:leading-relaxed">
          {post.title}
        </p>
        <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
          {post.desc}
        </p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-green-600  border border-green-600 rounded-full px-2 py-1"
            >
              # {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center mt-1.5">
          <span className="text-xs text-gray-400 mr-3">
            {post.publishedAt}
          </span>
          {/* <span className="text-xs text-gray-400 flex items-center gap-1">
            <FaHeart className="inline" />
            <span>3</span>
          </span> */}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
