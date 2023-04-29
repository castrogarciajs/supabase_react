import { usePost } from "../hooks/usePost";

export function Posts() {
  const { posts } = usePost();
  console.log(posts);
  return <div>Posts</div>;
}
