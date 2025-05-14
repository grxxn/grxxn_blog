import { getPostList } from "@/api/post";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const postList = await getPostList();

  return (
    <main>
      {postList.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </main>
  );
}
