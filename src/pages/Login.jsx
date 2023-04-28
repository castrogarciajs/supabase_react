import React from "react";
import supabase from "../supabase/supabase";

export function Login() {
  const [email, setEmail] = React.useState("");

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    supabase.auth.signInWithOtp({
      email,
    });
  };

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
