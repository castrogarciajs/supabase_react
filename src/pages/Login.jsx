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
    <div className="flex h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <p>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Ingresa tu email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 placeholder:pl-3"
          />
        </p>
        <p>
          <button type="submit">Sing In</button>
        </p>
      </form>
    </div>
  );
}
