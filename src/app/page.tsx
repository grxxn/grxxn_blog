import PostCard from "@/components/PostCard";
import { getPostList } from "../../lib/posts";
import ProfileCard from "@/components/ProfileCard";

export default async function Home() {
  const postList = getPostList();

  return (
    <div className="flex flex-col px-4 md:p-0">
      <ProfileCard />
      <div className="mt-3 mb-3 text-sm text-gray-600 self-end">
        총 <span className="ml-1">{postList.length | 0}</span>건
      </div>
      <div>
        {postList.map((post) => (
          <PostCard post={post} key={post.seq} />
        ))}
      </div>
    </div>
  );
}
