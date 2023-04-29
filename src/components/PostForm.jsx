import { useState } from "react";
import { usePost } from "../hooks/usePost";

export function PostForm() {
  const [name, setName] = useState("");
  const { create, loading } = usePost();
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
      />
      <button type="submit" disabled={loading}>
        {loading ? "adding" : "add"}
      </button>
    </form>
  );
}
