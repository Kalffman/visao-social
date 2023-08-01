import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/user";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
    <ToastContainer />
  </React.StrictMode>
);
