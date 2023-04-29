import { createContext, useState } from "react";

const PostContext = createContext();

function Context({ children }) {
  const [posts, setPosts] = useState([]);
  return (
    <PostContext.Provider
      value={{
        posts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, Context };
