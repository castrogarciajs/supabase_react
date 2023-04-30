import { useState } from "react";
import { supabase } from "../supabase/supabase";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({
        email,
      });
      setMessage("Te ha llegado un correo de acceso a tu gmail");
      setEmail("");
      return;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  return { handleChange, handleSubmit, email, message };
}
