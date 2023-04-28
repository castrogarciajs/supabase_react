import { createClient } from "@supabase/supabase-js";

const client = createClient(
  import.meta.env.VITE_SUPABASE_PROJECT_URL,
  import.meta.env.VITE_SUPABASE_PROJECT_API_KEY
);
