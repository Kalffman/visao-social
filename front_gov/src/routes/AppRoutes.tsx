import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home";
import { AuthProvider } from "../context/auth";
import { UserProvider } from "../context/user";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </AuthProvider>
      </UserProvider>
    </Router>
  );
};

export default AppRoutes;
