import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../providers/UserContext";
import Api from "../services/Api";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { getUserData } = useContext(UserContext);
  const [activeModal, setActiveModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [actualEditTech, setActualEditTech] = useState({});

  const createTech = async (data) => {
    try {
      const response = await Api.post("/users/techs", data);
      if (response.data) {
        toast.success("Tecnologia adicionada com sucesso!");
        setActiveModal(false);
        getUserData();
      }
    } catch (error) {
      toast.error(`Falha: ${error.message}!`);
    }
  };

  const editTech = async (itemId, data) => {
    try {
      const response = await Api.put(`/users/techs/${itemId}`, data);
      if (response.data) {
        toast.success("Dados atualizados com sucesso!");
        setActiveModal(false);
        getUserData();
      }
    } catch (error) {
      toast.error(`Falha: ${error.message}!`);
    }
  };

  const deleteTech = async (itemId) => {
    try {
      await Api.delete(`/users/techs/${itemId}`);
      toast.success("Tecnologia excluída com sucesso!");
      setActiveModal(false);
      getUserData();
    } catch (error) {
      toast.error(`Falha: ${error.message}!`);
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
