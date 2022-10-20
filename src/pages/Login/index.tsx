import { useContext, useEffect } from "react";
import Logo from "../../assets/images/Logo.svg";
import { Loader } from "../../components/Loader";
import { LoginForm } from "../../components/LoginForm";
import { LoadingContext } from "../../providers/LoadingContext";
import { LogoType, WrappContainer, Wrapper } from "./styles";

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
