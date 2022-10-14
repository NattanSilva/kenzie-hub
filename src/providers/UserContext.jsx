import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../services/Api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const registUser = async (data) => {
    try {
      const response = await Api.post("/users", data);
      if (response.data) {
        toast.success("Conta criada com sucesso!");
        navigate("/");
      }
    } catch (error) {
      toast.error(`Falha: ${error.response.data.message}!`);
    }
  };

  const logUser = async (data) => {
    try {
      const response = await Api.post("/sessions", data);

      if (response.data.token) {
        localStorage.setItem("@userToken", response.data.token);
        localStorage.setItem("@userId", response.data.user.id);
        navigate("/dashboard", { replace: true });
        toast.success("Login bem sucedido!");
      }
    } catch (error) {
      switch (error.request.status) {
        case 401:
          toast.error("Falha: Email e/ou Senha inválidos!");
          break;
        default:
          toast.error("Falha ao realizar o login!");
          break;
      }
    }
  };

  async function getUserData() {
    try {
      const response = await Api.get(
        `/users/${localStorage.getItem("@userId")}`
      );
      if (response.data) {
        setUserData(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Falha: ${error.message}`);
    }
  }

  return (
    <UserContext.Provider value={{ userData, getUserData, logUser, registUser }}>
      {children}
    </UserContext.Provider>
  );
};
