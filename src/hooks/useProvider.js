import { useContext } from "react";
import { context } from "../context/Context";

export function useProvider() {
  const _context = useContext(context);
  return _context;
}
