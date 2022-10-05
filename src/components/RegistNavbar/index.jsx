import { BackBtn, NavBox } from "./styles";
import Logo from "../../assets/images/Logo.svg";

export const RegistNavbar = () => {
  return (
    <NavBox>
      <img src={Logo} alt="Logo escrito Kenzie Hub" />
      <BackBtn>Voltar</BackBtn>
    </NavBox>
  );
};
