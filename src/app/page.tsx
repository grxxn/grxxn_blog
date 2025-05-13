import { getPostList } from "@/api/post";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getPostList();

  return (
    <main>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </main>
  );
}
