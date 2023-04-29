import { createContext, useState } from "react";
import { supabase } from "../supabase/supabase";

const PostContext = createContext();

function Context({ children }) {
  const [posts, setPosts] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const get = async (done = false) => {
    setLoading(true);
    const { data } = await supabase.auth.getUser();
    const response = await supabase
      .from("supbase_tasks")
      .select()
      .eq("user", data.user.id)
      .eq("done", done)
      .order("id", { ascending: true });

    if (response.error) throw response.error;

    setPosts(response.data);
    setLoading(false);
  };

  const create = async (name) => {
    try {
      setAdding(true);
      const { data } = await supabase.auth.getUser();

      const response = await supabase
        .from("supbase_tasks")
        .insert({
          name: name,
          user: data.user.id,
        })
        .select();

      if (response.error) throw response.error;

      setPosts([...posts, ...response.data]);
    } catch (error) {
      console.log(error.message);
      return;
    }
    setAdding(false);
  };

  const _delete = async (id) => {
    const { data } = await supabase.auth.getUser();
    const response = await supabase
      .from("supbase_tasks")
      .delete()
      .eq("user", data.user.id)
      .eq("id", id)
      .select();

    if (response.error) throw response.error;

    setPosts(posts.filter((post) => post.id !== id));
  };

  const update = async (id, fields) => {
    const { data } = await supabase.auth.getUser();

    const response = await supabase
      .from("supbase_tasks")
      .update(fields)
      .eq("user", data.user.id)
      .eq("id", id);

    if (response.error) throw response.error;

    console.log(response);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        get,
        create,
        _delete,
        update,
        adding,
        loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, Context };
