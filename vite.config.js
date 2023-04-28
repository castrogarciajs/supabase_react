import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: {
    SUPBASE_PROJECT_URL: process.env.SUPBASE_PROJECT_URL,
    SUPBASE_PROJECT_API_KEY: process.env.SUPBASE_PROJECT_API_KEY,
  },
});
