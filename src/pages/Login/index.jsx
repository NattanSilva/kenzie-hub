import { LoginForm } from "../../components/LoginForm";
import { LogoType, WrappContainer, Wrapper } from "./styles";
import Logo from "../../assets/images/Logo.svg";
import { useContext, useEffect } from "react";
import { Loader } from "../../components/Loader";
import { LoadingContext } from "../../providers/LoadingContext";

export const Login = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Wrapper>
      {isLoaded ? (
        <WrappContainer>
          <LogoType>
            <img src={Logo} alt="Logo escrtio KenzieHub" />
          </LogoType>
          <LoginForm />
        </WrappContainer>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};
