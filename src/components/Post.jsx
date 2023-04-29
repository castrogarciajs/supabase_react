export function Post({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.name}</h1>
            <p>{JSON.stringify(post.done)}</p>
          </div>
        );
      })}
    </>
  );
}
