import { usePost } from "../hooks/usePost";

export function Post({ post }) {
  const { _delete, update } = usePost();

  const handleDelelte = () => {
    _delete(post.id);
  };
  const handleDone = () => {
    update(post.id, { done: !post.done });
  };
  return (
    <>
      <div>
        <div>
          <h2>{post.name}</h2>
          <p>{JSON.stringify(post.done)}</p>
        </div>
        <div>
          <button onClick={handleDelelte}>DELETE</button>
          <button onClick={handleDone}>DONE</button>
        </div>
      </div>
    </>
  );
}
