import { createContext } from "react";

const context = createContext();

function Context({ children }) {
  return <context.Provider>{children}</context.Provider>;
}

export { context, Context };
