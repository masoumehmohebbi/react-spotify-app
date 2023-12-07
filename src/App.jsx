import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthFormLayout } from "./features/auth/AuthFormLayout";
import LogIn from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const i18nextLng = localStorage.getItem("i18nextLng");
    if (i18nextLng === "fa") document.body.dir = "rtl";
  }, []);
  return (
    <Routes>
      <Route element={<AuthFormLayout />}>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
