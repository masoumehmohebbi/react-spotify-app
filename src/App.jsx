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
import Musics from "./features/admin/Musics";
import DashboardHome from "./features/admin/DashboardHome";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    const i18nextLng = localStorage.getItem("i18nextLng");
    if (i18nextLng === "fa") document.body.dir = "rtl";
  }, []);
  // axios
  //   .post("https://spotify.apanel.top/api/auth/otp/send/", {
  //     first_name: "l",
  //     last_name: "ll",
  //     phone: "09118476029",
  //     password: "147896523",
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   });

  return (
    <Providers>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist/:id" element={<Playlist />} />
          </Route>

          <Route element={<AuthFormLayout />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Auth />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route
              index
              path="/admin-dashboard/home"
              element={<DashboardHome />}
            />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-dashboard/users" element={<Users />} />
            <Route path="/admin-dashboard/musics" element={<Musics />} />
          </Route>

          <Route path="/about-us/contact" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </Providers>
  );
}

export default App;
