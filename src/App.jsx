import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthFormLayout } from "./features/auth/AuthFormLayout";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<AuthFormLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
