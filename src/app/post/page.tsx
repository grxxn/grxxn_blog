import Link from "next/link";
import ContentBox from "./ContentsBox";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | number };
}) => {
  const seq = searchParams.seq as number;

  return (
    <div className="flex flex-col max-w-5xl">
      <ContentBox
        seq={seq}
      />
      <div className="mt-4">
        <Link href={"/"} className="border rounded-md p-3 px-6 text-xs bg-black text-white">목록으로</Link>
        <div className="flex flex-col gap-2 mt-8">
          <Link href={"#"} className="text-left flex items-center">
            <span className="mr-3 text-gray-500 text-xs">이전글</span>
            <span>어쩌고저쩌고의 이전글 제목입니다</span>
          </Link>
          <Link href={"#"} className="text-left flex items-center">
            <span className="mr-3 text-gray-500 text-xs">다음글</span>
            <span>어쩌고저쩌고의 다음글 제목입니다</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
