import { Navigate } from "react-router-dom";

interface IPrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const userToken = localStorage.getItem("@userToken");

  return userToken ? children : <Navigate to="/" />;
};
