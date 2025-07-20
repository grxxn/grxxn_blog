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
        <div className="border-b mt-5"></div>
      </div>
      <article className="prose prose-lg dark:prose-invert leading-relaxed text-gray-800 dark:text-gray-100 max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
          ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi
          eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
          imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
          Egestas integer eget aliquet nibh praesent. In hac habitasse platea
          dictumst quisque sagittis purus. Pulvinar elementum integer enim neque
          volutpat ac.
        </p>
        <p>
          Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
          ullamcorper malesuada proin. Neque convallis a cras semper auctor.
          Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor
          id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus
          integer feugiat scelerisque. Feugiat in fermentum posuere urna nec
          tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent
          elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu
          augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet
          risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl
          suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim
          convallis aenean et tortor at. Pretium viverra suspendisse potenti
          nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus
          ultrices. Elementum nibh tellus molestie nunc. Et magnis dis
          parturient montes nascetur. Est placerat in egestas erat imperdiet.
          Consequat interdum varius sit amet mattis vulputate enim.
        </p>
        <p>
          Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum
          odio eu. Etiam erat velit scelerisque in dictum non consectetur a
          erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor
          posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas.
          Bibendum neque egestas congue quisque egestas diam. Laoreet id donec
          ultrices tincidunt arcu non sodales neque. Eget felis eget nunc
          lobortis mattis aliquam faucibus purus. Faucibus interdum posuere
          lorem ipsum dolor sit.
        </p>
        <p>
          Et netus et malesuada fames ac. Erat pellentesque adipiscing commodo
          elit at imperdiet dui accumsan. Sodales neque sodales ut etiam sit
          amet nisl purus in. Maecenas volutpat blandit aliquam etiam. Sit amet
          luctus venenatis lectus magna fringilla urna porttitor rhoncus.
          Egestas purus viverra accumsan in nisl. Semper feugiat nibh sed
          pulvinar proin. Duis convallis convallis tellus id interdum velit
          laoreet. Ante in nibh mauris cursus mattis molestie. Ut etiam sit amet
          nisl purus in mollis nunc. Feugiat sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Tellus at urna condimentum mattis
          pellentesque id nibh tortor id. Tristique magna sit amet purus gravida
          quis blandit turpis cursus. Dolor sit amet consectetur adipiscing.
          Consequat ac felis donec et odio pellentesque diam volutpat. Nunc sed
          augue lacus viverra vitae congue. Mauris in aliquam sem fringilla ut
          morbi tincidunt augue.
        </p>
        <p>
          Elementum eu facilisis sed odio morbi quis commodo odio. Mauris
          rhoncus aenean vel elit scelerisque mauris pellentesque. Accumsan sit
          amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam
          maecenas sed enim ut sem. Turpis egestas maecenas pharetra convallis
          posuere. Nibh venenatis cras sed felis eget velit aliquet. Elementum
          nisi quis eleifend quam adipiscing. Amet cursus sit amet dictum sit
          amet justo donec enim. Odio pellentesque diam volutpat commodo sed
          egestas egestas fringilla. Habitant morbi tristique senectus et netus
          et malesuada. Imperdiet dui accumsan sit amet nulla facilisi morbi
          tempus iaculis. Ac turpis egestas maecenas pharetra.
        </p>
      </article>
    </section>
  );
};

export default page;
