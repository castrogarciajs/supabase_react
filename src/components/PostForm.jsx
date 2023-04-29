import { useState } from "react";
import { supabase } from "../supabase/supabase";

export function PostForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await supabase.auth.getUser();

      const response = await supabase.from("supbase_tasks").insert({
        name: name,
        user: data.user.id,
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
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
