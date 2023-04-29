import { useEffect } from "react";
import { usePost } from "../hooks/usePost";
import { Post } from "./Post";

export function Posts() {
  const { posts, get } = usePost();

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
}
