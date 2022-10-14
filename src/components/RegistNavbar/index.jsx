import { BackBtn, NavBox } from "./styles";
import Logo from "../../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../providers/LoadingContext";
import { useContext } from "react";

export const RegistNavbar = () => {
  const { setIsLoaded } = useContext(LoadingContext);
  const navigate = useNavigate();

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
