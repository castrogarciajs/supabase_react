export function Post({ post }) {
  const handleDelelte = () => {
    alert("eliminando");
  };
  const handleDone = () => {
    alert("actulizando");
  };
  return (
    <>
      <div key={post.id}>
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
