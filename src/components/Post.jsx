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
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-10 pb-5">
        <div className="px-6 py-4 flex flex-col gap-3 mb-3">
          <h2 className="text-gray-700 font-bold">{post.name}</h2>
          <p className={post.done ? "text-green-500" : "text-red-700"}>
            {post.done ? "Post completed" : "Post not completed"}
          </p>
        </div>
        <div className="flex justify-center gap-10 mt-3">
          <button
            onClick={handleDelelte}
            className="bg-transparent hover:bg-red-700 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
          >
            DELETE
          </button>
          <button
            onClick={handleDone}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            DONE
          </button>
        </div>
      </div>
    </>
  );
}
