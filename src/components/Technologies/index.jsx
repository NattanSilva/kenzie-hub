import { useContext } from "react";
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
} from "./styles";

export const Technologies = () => {
  const { userData } = useContext(UserContext);
  return (
    <TechsContainer>
      <TechsHeader>
        <TechsMainTitle>Tecnologias</TechsMainTitle>
        <AddTechBtn>+</AddTechBtn>
      </TechsHeader>
      <TechsList>
        {userData.techs.map((tech) => {
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
        })}
      </TechsList>
    </TechsContainer>
  );
};
