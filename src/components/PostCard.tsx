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
      className="border rounded-xl w-full min-w-[470px] p-6 px-7 flex flex-col gap-5 hover:border-green-600 cursor-pointer mb-4"
    >
      <div className="preview-sec bg-green-50 w-full h-72"></div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="font-bold text-lg">{post.title}</p>
          <p className="text-sm text-gray-500 mt-2">{post.desc}</p>
        </div>
        <div>
          <div className="flex gap-2 mt-4">
            {tagArr.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-green-600 bg-green-50 border border-green-600 rounded-full px-2 py-1"
              >
                # {tag}
              </span>
            ))}
            {post.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-green-600 bg-green-50 border border-green-600 rounded-full px-2 py-1"
              >
                # {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center mt-1.5">
            <span className="text-xs text-gray-400 mr-3">
              {post.publishedAt}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <FaHeart className="inline" />
              <span>3</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
