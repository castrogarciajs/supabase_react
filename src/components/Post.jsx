import { usePost } from "../hooks/usePost";

export function Post({ post }) {

  const {delete} = usePost()
  const handleDelelte = () => {

    delete(post.id)
  };
  const handleDone = () => {
    alert("actulizando");
  };
  return (
    <>
      <div>
        <div>
          <h1>{post.name}</h1>
          <p>{JSON.stringify(post.done)}</p>
        </div>
        <div>
          <button onClick={() => handleDelelte()}>DELETE</button>
          <button onClick={() => handleDone()}>DONE</button>
        </div>
      </div>
    </>
  );
}
