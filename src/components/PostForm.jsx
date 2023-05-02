import { useState } from "react";
import { usePost } from "../hooks/usePost";

export function PostForm() {
  const [name, setName] = useState("");
  const { create, adding } = usePost();
  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    create(name);
    setName("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 flex-col mt-5 text-center justify-center items-center mb-10"
    >
      <input
        type="text"
        name="title"
        placeholder="Write a post title"
        onChange={handleChange}
        value={name}
        required
        className="rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 placeholder:pl-1 outline-none placeholder:font-bold w-96 placeholder:text-center"
      />
      <button
        type="submit"
        disabled={adding}
        className="bg-green-500 p-4 rounded-md w-40 h-10 flex justify-center items-center font-mono font-bold text-white hover:bg-green-700 transition-colors"
      >
        {adding ? "Adding" : "Add"}
      </button>
    </form>
  );
}
