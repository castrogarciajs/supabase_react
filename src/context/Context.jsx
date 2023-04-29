import { createContext } from "react";

const context = createContext();

function Context({ children }) {
  return (
    <context.Provider value={{ name: "context" }}>{children}</context.Provider>
  );
}

export { context, Context };
