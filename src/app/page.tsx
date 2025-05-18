import PostCard from "@/components/PostCard";
import { getPostList } from "../../lib/posts";

export default async function Home() {
  const postList = getPostList();

  return (
    <>
      <div className="mb-3 flex justify-end text-sm text-gray-600">
        총 <span className="ml-1">{postList.length | 0}</span>건
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {postList.map((post) => (
          <PostCard post={post} key={post.seq} />
        ))}
      </div>
    </>
  );
}
