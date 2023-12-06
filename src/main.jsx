import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Routes>
      <Route
        path="/login"
        element={
          <Login>
            <LoginForm />
          </Login>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <Login>
            <Register />
          </Login>
        }
      ></Route>
    </Routes> */}

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
