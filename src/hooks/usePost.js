import { useContext } from "react";
import { PostContext } from "../context/Context";

export function usePost() {
  const context = useContext(PostContext);
  if (!context)
    throw new Error(
      "para usar el hook usePost debe estar dentro de un contexto"
    );
  return context;
}
