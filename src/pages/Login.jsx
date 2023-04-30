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
  const { handleChange, handleSubmit, email, message } = useLogin();
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <h1 className="md:text-7xl  text-4xl mb-10 font-bold font-mono">
        Supabase React
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <span className="font-bold text-green-500">{message}</span>
        <p>
          <label
            htmlFor="email"
            className="block text-sm mb-3 text-3xl font-mono font-bold"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Ingresa tu email"
            required
            value={email}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 placeholder:pl-1 outline-none"
          />
        </p>
        <p className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 p-4 rounded-md w-60 h-10 flex justify-center items-center font-mono font-bold text-white"
          >
            Sing In
          </button>
        </p>
      </form>
    </div>
  );
}
