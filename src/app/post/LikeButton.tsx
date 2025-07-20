"use client";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // 좋아요 한 기록이 있으면 liked 상태를 true로 설정
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    const postId = "postId"; // 실제 포스트 ID로 대체해야 함
    if (likedPosts.includes(postId)) {
      setLiked(true);
    }
  }, []);


  return (
    <button
      type="button"
      className={`w-8 h-8 border rounded-full flex justify-center items-center hover:border-green-600 ${liked && "text-green-600"
        }`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default LikeButton;
