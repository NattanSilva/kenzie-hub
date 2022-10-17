import { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import Api from "../services/Api";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { getUserData } = useContext(UserContext);
  const [activeModal, setActiveModal] = useState(false);

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

  return (
    <TechsContext.Provider value={{ createTech, activeModal, setActiveModal }}>
      {children}
    </TechsContext.Provider>
  );
};
