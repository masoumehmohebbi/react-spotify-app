import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";

import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import { LoginForm } from "./ui/login.jsx";
import { Register } from "./ui/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
     <Routes>
        <Route path="/login" element={<Login><LoginForm/></Login>}></Route>
        <Route path="/register" element={<Login><Register/></Login>}></Route>
      </Routes>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
