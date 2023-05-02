import { useEffect } from "react";
import { usePost } from "../hooks/usePost";
import { Post } from "./Post";

export function Posts({ done }) {
  const { posts, get, loading } = usePost();

  useEffect(() => {
    get(done);
  }, [done]);

  return (
    <div className="">
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
