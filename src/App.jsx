import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthFormLayout } from "./features/auth/AuthFormLayout";
import LogIn from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { useEffect } from "react";
import Providers from "./features/Providers";
import { AboutUs } from "./pages/AboutUs";
import Layout from "./ui/Layout";

function App() {
  useEffect(() => {
    const i18nextLng = localStorage.getItem("i18nextLng");
    if (i18nextLng === "fa") document.body.dir = "rtl";
  }, []);
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthFormLayout />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/about-us/contact" element={<AboutUs />} />
        </Route>
      </Routes>
    </Providers>
  );
}

export default App;
