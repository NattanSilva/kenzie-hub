import { WrappContainer, Wrapper } from "../Login/styles";
import { RegistForm } from "../../components/RegistForm";
import { RegistNavbar } from "../../components/RegistNavbar";

export const Register = () => {
  return (
    <Wrapper>
      <WrappContainer>
        <RegistNavbar />
        <RegistForm />
      </WrappContainer>
    </Wrapper>
  );
};
