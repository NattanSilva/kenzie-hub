import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import Trash from "../../assets/images/Trash.svg";
import {
  AddTechBtn,
  ItemFooter,
  ItemHeader,
  ItemRemoveBtn,
  ItemStatus,
  ItemTitle,
  TechItem,
  TechsContainer,
  TechsHeader,
  TechsList,
  TechsMainTitle,
  VoidTitle,
} from "./styles";
import { TechsContext } from "../../providers/TechsContext";

export const Technologies = () => {
  const { userData } = useContext(UserContext);
  const { setActiveModal } = useContext(TechsContext);
  const [techsList, setTechsList] = useState([])

  useEffect(() => {
    setTechsList(userData.techs)
  }, [userData])
  return (
    <TechsContainer>
      <TechsHeader>
        <TechsMainTitle>Tecnologias</TechsMainTitle>
        <AddTechBtn onClick={() => setActiveModal(true)}>+</AddTechBtn>
      </TechsHeader>
      <TechsList>
        {techsList.length !== 0 ? (
          techsList.map((tech) => {
            return (
              <TechItem key={tech.id} className={tech.status}>
                <ItemHeader>
                  <ItemTitle>{tech.title}</ItemTitle>
                  <ItemStatus>{tech.status}</ItemStatus>
                </ItemHeader>
                <ItemFooter>
                  <ItemRemoveBtn>
                    <img src={Trash} alt="Imagem de um cesto de lixo" />
                  </ItemRemoveBtn>
                </ItemFooter>
              </TechItem>
            );
          })
        ) : (
          <TechItem className="void">
            <VoidTitle>Lista vazia, adicione novas tecnologias...</VoidTitle>
          </TechItem>
        )}
      </TechsList>
    </TechsContainer>
  );
};
