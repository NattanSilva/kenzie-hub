import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const userToken = localStorage.getItem("@userToken");

  return userToken ? children : <Navigate to="/" />;
};
