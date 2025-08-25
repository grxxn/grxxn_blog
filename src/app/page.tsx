import PostCard from "@/components/PostCard";
import { getPostList } from "../../lib/posts";
import ProfileCard from "@/components/ProfileCard";

export default async function Home() {
  const postList = getPostList();

  return (
    <div className="flex flex-col">
      <ProfileCard />

    </div>
  );
}
