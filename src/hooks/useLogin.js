import React from "react";
import supabase from "../supabase/supabase";

export function useLogin() {
  const [email, setEmail] = React.useState("");

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({
        email,
      });
      return;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  return { handleChange, handleSubmit };
}
