import { createClient } from "@supabase/supabase-js";

const supbase_url = process.env.REACT_APP_SUPBASE_PROJECT_URL;
const supbase_api_key = process.env.REACT_APP_SUPBASE_PROJECT_API_KEY;

createClient({});
