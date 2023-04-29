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
  return (
    <PostContext.Provider
      value={{
        posts,
        get,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, Context };
