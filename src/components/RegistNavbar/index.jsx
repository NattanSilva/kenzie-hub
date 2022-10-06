import { BackBtn, NavBox } from "./styles";
import Logo from "../../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";

export const RegistNavbar = ({ setIsLoaded }) => {
  const navigate = useNavigate();

  return (
    <NavBox>
      <img src={Logo} alt="Logo escrito Kenzie Hub" />
      <BackBtn
        onClick={() => {
          setIsLoaded(false);
          navigate("/");
        }}
      >
        Voltar
      </BackBtn>
    </NavBox>
  );
};
