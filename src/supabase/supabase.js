import { createClient } from "@supabase/supabase-js";

export default createClient(
  import.meta.env.VITE_SUPABASE_PROJECT_URL,
  import.meta.env.VITE_SUPABASE_PROJECT_API_KEY
);

console.log(import.meta);
