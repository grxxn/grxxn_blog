import ContentBox from "./ContentsBox";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | number };
}) => {
  const seq = searchParams.seq as number;

  return (
    <div className="flex flex-col">
      <ContentBox
        seq={seq}
      />
      <div>
        <button>목록</button>
        <button>이전글</button>
        <button>다음글</button>
      </div>
    </div>
  );
};

export default page;
