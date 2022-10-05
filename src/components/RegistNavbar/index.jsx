import { BackBtn, NavBox } from "./styles";
import Logo from "../../assets/images/Logo.svg";

export const RegistNavbar = ({setIsLoaded}) => {
  return (
    <NavBox>
      <img src={Logo} alt="Logo escrito Kenzie Hub" />
      <BackBtn to="/" onClick={() => setIsLoaded(false)}>Voltar</BackBtn>
    </NavBox>
  );
};
