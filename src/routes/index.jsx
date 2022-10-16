import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { DashBoard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { TechsProvider } from "../providers/TechsContext";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <TechsProvider>
              <DashBoard />
            </TechsProvider>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesMain;
