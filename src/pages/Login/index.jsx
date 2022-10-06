import { LoginForm } from "../../components/LoginForm";
import { LogoType, WrappContainer, Wrapper } from "./styles";
import Logo from "../../assets/images/Logo.svg";
import { useEffect } from "react";
import { Loader } from "../../components/Loader";

export const Login = ({ isLoaded, setIsLoaded }) => {
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  return (
    <Wrapper>
      {isLoaded ? (
        <WrappContainer>
          <LogoType>
            <img src={Logo} alt="Logo escrtio KenzieHub" />
          </LogoType>
          <LoginForm setIsLoaded={setIsLoaded} />
        </WrappContainer>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};
