import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { DashBoard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { token } from "../services/Api";

const RoutesMain = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<Login isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}
      ></Route>
      <Route
        path="/register"
        element={<Register isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashBoard isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesMain;
