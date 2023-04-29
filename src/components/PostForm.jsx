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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write a post title"
        onChange={handleChange}
        value={name}
        required
      />
      <button type="submit" disabled={adding}>
        {adding ? "adding" : "add"}
      </button>
    </form>
  );
}
