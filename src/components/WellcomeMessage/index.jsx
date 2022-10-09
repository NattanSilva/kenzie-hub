import { Main, MainContainer, UserModule, UserSaudation } from "./styles";

export const WellcomeMessage = ({ userData }) => {
  return (
    <Main>
      <MainContainer>
        <UserSaudation>Olá, {userData.name}</UserSaudation>
        <UserModule>{userData.course_module}</UserModule>
      </MainContainer>
    </Main>
  );
};
