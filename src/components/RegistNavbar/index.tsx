import { useContext } from "react";
import Logo from "../../assets/images/Logo.svg";
import { LoadingContext } from "../../providers/LoadingContext";
import { BackBtn, NavBox } from "./styles";

export const RegistNavbar = () => {
  const { setIsLoaded } = useContext(LoadingContext);

  return (
    <NavBox>
      <img src={Logo} alt="Logo escrito Kenzie Hub" />
      <BackBtn
        onClick={() => {
          setIsLoaded(false);
        }}
        to="/"
      >
        Voltar
      </BackBtn>
    </NavBox>
  );
};
