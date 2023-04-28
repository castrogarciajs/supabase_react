import { createClient } from "@supabase/supabase-js";

const client = createClient(
  process.env.REACT_APP_SUPBASE_PROJECT_URL,
  process.env.REACT_APP_SUPBASE_PROJECT_API_KEY
);
