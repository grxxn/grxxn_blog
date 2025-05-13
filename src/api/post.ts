interface Post {
  id: number;
  title: string;
  body: string;
  // userId: number;
}

// 포스트 목록 조회
export async function getPostList(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok)
    throw new Error("데이터 조회에 실패했습니다. 잠시 후 다시 시도해주세요.");

  return res.json();
}

// 포스트 상세 조회
export async function getPostDetail(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok)
    throw new Error("데이터 조회에 실패했습니다. 잠시 후 다시 시도해주세요.");

  return res.json();
}

// 포스트 작성
export async function addPost(post: Post): Promise<Post> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok)
    throw new Error("글 작성에 실패했습니다. 잠시 후 다시 시도해주세요.");

  return res.json();
}

// 포스트 수정
export async function updatePost(post: Post): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok)
    throw new Error("글 수정에 실패했습니다. 잠시 후 다시 시도해주세요.");
  return res.json();
}

// 포스트 삭제
export async function deletePost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok)
    throw new Error("글 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.");
  return res.json();
}
