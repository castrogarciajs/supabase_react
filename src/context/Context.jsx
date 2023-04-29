import { createContext, useState } from "react";
import { supabase } from "../supabase/supabase";

const PostContext = createContext();

function Context({ children }) {
  const [posts, setPosts] = useState([]);

  const get = async () => {
    const response = await supabase.from("supbase_tasks").select();
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
