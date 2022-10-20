import { useContext, useEffect, useState } from "react";
import Trash from "../../assets/images/Trash.svg";
import { TechsContext } from "../../providers/TechsContext";
import { ITech, UserContext } from "../../providers/UserContext";
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

export const Technologies = () => {
  const { userData } = useContext(UserContext);
  const { setActiveModal, setModalType, setActualEditTech, deleteTech } =
    useContext(TechsContext);
  const [techsList, setTechsList] = useState<ITech[]>([]);

  useEffect(() => {
    setTechsList(userData.techs);
  }, [userData]);

  return (
    <TechsContainer>
      <TechsHeader>
        <TechsMainTitle>Tecnologias</TechsMainTitle>
        <AddTechBtn
          onClick={() => {
            setActiveModal(true);
            setModalType("create");
          }}
        >
          +
        </AddTechBtn>
      </TechsHeader>
      <TechsList>
        {techsList?.length !== 0 ? (
          techsList?.map((tech) => {
            return (
              <TechItem key={tech.id} className={tech.status}>
                <ItemHeader>
                  <ItemTitle
                    onClick={() => {
                      setActiveModal(true);
                      setModalType("edit");
                      setActualEditTech(tech);
                    }}
                  >
                    {tech.title}
                  </ItemTitle>
                  <ItemStatus>{tech.status}</ItemStatus>
                </ItemHeader>
                <ItemFooter>
                  <ItemRemoveBtn
                    onClick={() => {
                      deleteTech(tech.id);
                    }}
                  >
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
