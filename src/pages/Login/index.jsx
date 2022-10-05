import { LoginForm } from "../../components/LoginForm";
import { LogoType, WrappContainer, Wrapper } from "./styles";
import Logo from "../../assets/images/Logo.svg";

export const Login = () => {
  return (
    <Wrapper>
      <WrappContainer>
        <LogoType>
          <img src={Logo} alt="Logo escrtio KenzieHub" />
        </LogoType>
        <LoginForm />
      </WrappContainer>
    </Wrapper>
  );
};
