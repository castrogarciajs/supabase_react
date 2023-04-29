import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import { useLogin } from "../hooks/useLogin";

export function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    return async () => {
      const user = await supabase.auth.getUser();
      if (!user) return navigate("/");
    };
  }, [navigate]);
  const { handleChange, handleSubmit } = useLogin();
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </p>
      <p>
        <button type="submit">Sing In</button>
      </p>
    </form>
  );
}
