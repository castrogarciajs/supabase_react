import { useEffect } from "react";
import { supabase } from "./supabase/supabase";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/_404";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      if (!session) return navigate("/login");
      return navigate("/");
    });
  }, [navigate]);
  return (
    <div className="bg-blue-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
