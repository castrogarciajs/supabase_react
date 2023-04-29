import { useContext } from "react";
import { PostContext } from "../context/Context";

export function usePost() {
  const context = useContext(PostContext);
  return context;
}
