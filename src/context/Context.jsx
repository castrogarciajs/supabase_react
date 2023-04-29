import { createContext, useState } from "react";
import { supabase } from "../supabase/supabase";

const PostContext = createContext();

function Context({ children }) {
  const [posts, setPosts] = useState([]);

  const get = async (done = false) => {
    const { data } = await supabase.auth.getUser();
    const response = await supabase
      .from("supbase_tasks")
      .select()
      .eq("user", data.user.id)
      .eq("done", done)
      .order("id", { ascending: true });

    if (response.error) throw response.error;

    setPosts(response.data);
  };

  const create = async (name) => {
    try {
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
  };
  return (
    <PostContext.Provider
      value={{
        posts,
        get,
        create,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, Context };
