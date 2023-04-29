import { createContext } from "react";

const PostContext = createContext();

function Context({ children }) {
  return (
    <PostContext.Provider value={{ name: "context" }}>
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, Context };
