import { useEffect } from "react";
import { supabase } from "./supabase/supabase";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/_404";

function App() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log({ event, session });
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
