import { useState } from "react";

export function PostForm() {
  const [title, setTitle] = useState("");

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write a post title"
        onChange={handleChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
