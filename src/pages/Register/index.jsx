import { WrappContainer, Wrapper } from "../Login/styles";
import { RegistForm } from "../../components/RegistForm";
import { RegistNavbar } from "../../components/RegistNavbar";
import { useEffect } from "react";
import { Loader } from "../../components/Loader";

export const Register = ({ isLoaded, setIsLoaded }) => {
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  return (
    <Wrapper>
      {isLoaded ? (
        <WrappContainer>
          <RegistNavbar setIsLoaded={setIsLoaded} />
          <RegistForm />
        </WrappContainer>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};
