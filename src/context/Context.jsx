import { createContext, useState } from "react";
import { supabase } from "../supabase/supabase";

const PostContext = createContext();

function Context({ children }) {
  const [posts, _] = useState([]);

  const get = async () => {
    const { data } = await supabase.auth.getUser();
    const response = await supabase
      .from("supbase_tasks")
      .select()
      .eq("user", data.user.id)
      .order("id", { ascending: true });
    console.log(response);
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
