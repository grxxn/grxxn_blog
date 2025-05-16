import PostCard from "@/components/PostCard";
import { getPostList } from "../../lib/posts";

export default async function Home() {
  const postList = getPostList();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
      {postList.map((post) => (
        <PostCard post={post} key={post.seq} />
      ))}
    </div>
  );
}
