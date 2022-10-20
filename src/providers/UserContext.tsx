import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../services/Api";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userData: IUserData;
  getUserData: () => Promise<void>;
  logUser: (data: ILogUser) => Promise<void>;
  registUser: (data: IRegistuser) => Promise<void>;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
}

export interface IWork {
  title: string;
  description: string;
  deploy_url: string;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[] | [];
  works: IWork[] | [];
  avatar_url: string | null;
}

export interface ILogUser {
  email: string;
  password: string;
}

export interface IRegistuser {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  bio: string;
  contact: string;
  course_module: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  const navigate = useNavigate();

  const registUser = async (data: IRegistuser) => {
    try {
      const response = await Api.post("/users", data);
      if (response.data) {
        toast.success("Conta criada com sucesso!");
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`Falha: ${error.message}!`);
      }
    }
  };

  const logUser = async (data: ILogUser) => {
    try {
      const response = await Api.post("/sessions", data);

      if (response.data.token) {
        localStorage.setItem("@userToken", response.data.token);
        localStorage.setItem("@userId", response.data.user.id);
        navigate("/dashboard", { replace: true });
        toast.success("Login bem sucedido!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            toast.error("Falha: email e/ou senha inválidos!");
            break;
          default:
            toast.error("Falha ao realizar o login!");
            break;
        }
      }
    }
  };

  async function getUserData() {
    try {
      const response = await Api.get<IUserData>(
        `/users/${localStorage.getItem("@userId")}`
      );
      setUserData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  }
  
  return (
    <UserContext.Provider
      value={{ userData, getUserData, logUser, registUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
