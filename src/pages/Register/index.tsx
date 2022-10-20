import { useContext, useEffect } from "react";
import { Loader } from "../../components/Loader";
import { RegistForm } from "../../components/RegistForm";
import { RegistNavbar } from "../../components/RegistNavbar";
import { LoadingContext } from "../../providers/LoadingContext";
import { WrappContainer, Wrapper } from "../Login/styles";

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
