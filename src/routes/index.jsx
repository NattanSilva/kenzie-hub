import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const RoutesMain = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<Login isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}
      />
      <Route
        path="/register"
        element={<Register isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}
      />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesMain;
