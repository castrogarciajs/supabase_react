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
    <div className="flex h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <h1 className="md:text-7xl  text-4xl mb-10 font-bold font-mono">
        SUPABASE REACT
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col w-96">
        <span className="font-bold text-green-500">{message}</span>
        <label htmlFor="email" className="font-mono font-bold">
          EMAIL
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Ingresa tu email"
          required
          value={email}
          className="rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 placeholder:pl-1 outline-none placeholder:font-bold"
        />

        <button
          type="submit"
          className="bg-green-500 p-4 rounded-md w-40 h-10 flex justify-center items-center font-mono font-bold text-white hover:bg-green-700 transition-colors"
        >
          SING IN
        </button>
      </form>
    </div>
  );
}
