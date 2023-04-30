import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import { PostForm } from "../components/PostForm";
import { Posts } from "../components/Posts";
import { LogOut } from "../components/LogOut";
import { Dashboard } from "../components/Dashboard";

export function HomePage() {
  const [done, setDone] = useState(false);
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
      <LogOut handleLogOut={handleLogOut} />

      <PostForm />

      <Dashboard setDone={setDone} done={done} />

      <Posts done={done} />
    </>
  );
}
