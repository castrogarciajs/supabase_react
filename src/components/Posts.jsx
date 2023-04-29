import { useEffect } from "react";
import { usePost } from "../hooks/usePost";
import { Post } from "./Post";

export function Posts() {
  const { posts, get, loading } = usePost();

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <p>No hay posts</p>
      )}
    </div>
  );
}
