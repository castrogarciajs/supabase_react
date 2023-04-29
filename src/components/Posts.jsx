import { useEffect } from "react";
import { usePost } from "../hooks/usePost";

export function Posts() {
  const { posts, get } = usePost();

  useEffect(() => {
    get();
  }, [posts]);
  console.log(posts);
  return <div>Posts</div>;
}
