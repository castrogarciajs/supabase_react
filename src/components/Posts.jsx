import { useEffect } from "react";
import { usePost } from "../hooks/usePost";

export function Posts() {
  const { posts, get } = usePost();

  useEffect(() => {
    get();
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.name}</h1>
            <p>{JSON.stringify(post.done)}</p>
          </div>
        );
      })}
    </div>
  );
}
