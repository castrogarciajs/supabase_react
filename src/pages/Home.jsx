import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";

export function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    return async () => {
      const user = await supabase.auth.getUser();
      if (!user) return navigate("/login");
    };
  }, [navigate]);

  const handleLogOut = () => supabase.auth.signOut();
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </>
  );
}
