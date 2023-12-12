import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthFormLayout } from "./features/auth/AuthFormLayout";
import LogIn from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { useEffect } from "react";
import Providers from "./features/Providers";
import { AboutUs } from "./pages/AboutUs";
import Search from "./pages/Search";
import AppLayout from "./ui/AppLayout";
import Playlist from "./features/PlayList/Playlist";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./features/admin/DashboardLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./features/admin/Users";

function App() {
  useEffect(() => {
    const i18nextLng = localStorage.getItem("i18nextLng");
    if (i18nextLng === "fa") document.body.dir = "rtl";
  }, []);
  return (
    <Providers>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist/:id" element={<Playlist />} />
        </Route>

        <Route element={<AuthFormLayout />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/users" element={<Users />} />
        </Route>

        <Route path="/about-us/contact" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Providers>
  );
}

export default App;
