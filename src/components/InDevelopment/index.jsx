import { UserSaudation } from "../WellcomeMessage/styles";
import { DevelopContainer, DevelopSubtitle, MainDevelop } from "./styles";

export const InDevelopment = () => (
  <MainDevelop>
    <DevelopContainer>
      <UserSaudation>Que pena! Estamos em desenvolvimento :(</UserSaudation>
      <DevelopSubtitle>
        Nossa aplicação está em desenvolvimento, em breve teremos novidades...
      </DevelopSubtitle>
    </DevelopContainer>
  </MainDevelop>
);
