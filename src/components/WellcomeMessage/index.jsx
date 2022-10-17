import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Main, MainContainer, UserModule, UserSaudation } from "./styles";

export const WellcomeMessage = () => {
  const {userData} = useContext(UserContext)
  return (
    <Main>
      <MainContainer>
        <UserSaudation>Olá, {userData.name}</UserSaudation>
        <UserModule>{userData.course_module}</UserModule>
      </MainContainer>
    </Main>
  );
};