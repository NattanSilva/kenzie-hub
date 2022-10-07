import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import { Header, HeaderContainer, HeaderLogo, LogoutBtn } from "./styles";

export const DashBoardNavBar = ({ setIsLoaded }) => {
  const navigate = useNavigate();

  return (
    <Header>
      <HeaderContainer>
        <HeaderLogo src={Logo} alt="Logo escrito KenzieHub" />
        <LogoutBtn
          onClick={() => {
            localStorage.clear();
            setIsLoaded(false);
            navigate("/");
          }}
        >
          Sair
        </LogoutBtn>
      </HeaderContainer>
    </Header>
  );
};