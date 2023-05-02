import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cmuvqfkzgpxyijlewkya.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdXZxZmt6Z3B4eWlqbGV3a3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MTIzMjEsImV4cCI6MTk5ODI4ODMyMX0.kyhjFuzzdZYR2ABF_AS4WDkRBSPwaMrwyRgIk4XSHac"
);
