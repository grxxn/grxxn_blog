import Link from "next/link";
import ContentBox from "./ContentsBox";
import { Post, getPostDetail, getPostList } from "../../../lib/posts";

type PostResponseType<T> = {
  prev?: T;
  next?: T;
}

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | number };
}) => {
  const seq = searchParams.seq as number;
  const post = getPostDetail(seq);

  const getPrevNextPost = (): PostResponseType<Post> => {
    const postList = getPostList();
    const resPosts: PostResponseType<Post> = {}

    // 이전 글
    const prevPostList = postList.filter((post) => post.seq < seq)
    if (prevPostList.length > 0) resPosts.prev = prevPostList[0];
    // 다음글 
    const nextPostList = postList.filter((post) => post.seq > seq);
    if (nextPostList.length > 0) resPosts.next = nextPostList[0];

    return resPosts;
  }
  const { prev, next } = getPrevNextPost();

  return (
    <div className="flex flex-col max-w-4xl min-w-[56rem]">
      <ContentBox
        post={post}
      />
      <div className="mt-4">
        <Link href={"/"} className="border rounded-md p-3 px-6 text-xs bg-black text-white">목록으로</Link>
        <div className="flex flex-col gap-2 mt-8">
          {
            prev && (
              <Link href={`/post?seq=${prev.seq}`} className="text-left flex items-center">
                <span className="mr-3 text-gray-500 text-xs">이전글</span>
                <span>{prev.title}</span>
              </Link>
            )
          }
          {
            next && (
              <Link href={`/post?seq=${next.seq}`} className="text-left flex items-center">
                <span className="mr-3 text-gray-500 text-xs">다음글</span>
                <span>{next.title}</span>
              </Link>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default page;
