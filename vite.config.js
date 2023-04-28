import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: {
    REACT_APP_SUPBASE_PROJECT_URL: process.env.REACT_APP_SUPBASE_PROJECT_URL,
    REACT_APP_SUPBASE_PROJECT_API_KEY:
      process.env.REACT_APP_SUPBASE_PROJECT_API_KEY,
  },
});
