import { WrappContainer, Wrapper } from "../Login/styles";
import { RegistForm } from "../../components/RegistForm";
import { RegistNavbar } from "../../components/RegistNavbar";
import { useContext, useEffect } from "react";
import { Loader } from "../../components/Loader";
import { LoadingContext } from "../../providers/LoadingContext";

export const Register = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Wrapper>
      {isLoaded ? (
        <WrappContainer>
          <RegistNavbar />
          <RegistForm />
        </WrappContainer>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};
