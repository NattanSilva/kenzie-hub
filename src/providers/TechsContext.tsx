import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ITech, UserContext } from "../providers/UserContext";
import Api from "../services/Api";

interface ITechContext {
  createTech: (data: ICreatedTech) => Promise<void>;
  editTech: (itemId: string, data: IEditedStatus) => Promise<void>;
  deleteTech: (itemId: string) => Promise<void>;
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  actualEditTech: ITech;
  setActualEditTech: React.Dispatch<React.SetStateAction<ITech>>;
}

interface ITechsProviderProps {
  children: React.ReactNode;
}

export interface IEditedStatus {
  status: string;
}

export interface ICreatedTech {
  title: string;
  status: string;
}

export const TechsContext = createContext<ITechContext>({} as ITechContext);

export const TechsProvider = ({ children }: ITechsProviderProps) => {
  const { getUserData } = useContext(UserContext);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [actualEditTech, setActualEditTech] = useState<ITech>({} as ITech);

  const createTech = async (data: ICreatedTech) => {
    try {
      const response = await Api.post("/users/techs", data);
      if (response.data) {
        toast.success("Tecnologia adicionada com sucesso!");
        setActiveModal(false);
        getUserData();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`Falha: ${error.message}!`);
      }
    }
  };

  const editTech = async (itemId: string, data: IEditedStatus) => {
    try {
      const response = await Api.put(`/users/techs/${itemId}`, data);
      if (response.data) {
        toast.success("Dados atualizados com sucesso!");
        setActiveModal(false);
        getUserData();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`Falha: ${error.message}!`);
      }
    }
  };

  const deleteTech = async (itemId: string) => {
    try {
      await Api.delete(`/users/techs/${itemId}`);
      toast.success("Tecnologia excluída com sucesso!");
      setActiveModal(false);
      getUserData();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`Falha: ${error.message}!`);
      }
    }
  };

  return (
    <TechsContext.Provider
      value={{
        createTech,
        editTech,
        deleteTech,
        activeModal,
        setActiveModal,
        modalType,
        setModalType,
        actualEditTech,
        setActualEditTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
