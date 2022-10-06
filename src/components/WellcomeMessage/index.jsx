import { Main, MainContainer, UserModule, UserSaudation } from "./styles";

export const WellcomeMessage = () => {
  return (
    <Main>
      <MainContainer>
        <UserSaudation>Olá, Samuel Leão</UserSaudation>
        <UserModule>Primeiro módulo (Introdução ao Frontend)</UserModule>
      </MainContainer>
    </Main>
  );
};
