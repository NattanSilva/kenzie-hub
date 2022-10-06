import { Navigate, useNavigate } from "react-router-dom";
import {
  FormBtn,
  FormContainer,
  FormInput,
  InputContent,
  InputTitle,
  MainForm,
  MainTitle,
  SubTitle,
  SwitchPageBtn,
} from "./styles";

export const LoginForm = ({ setIsLoaded }) => {
  const navigate = useNavigate();

  return (
    <FormContainer>
      <MainTitle>Login</MainTitle>
      <MainForm>
        <FormInput>
          <InputTitle>Email</InputTitle>
          <InputContent type="email" placeholder="Digite seu email" />
        </FormInput>
        <FormInput>
          <InputTitle>Senha</InputTitle>
          <InputContent type="password" placeholder="Digite sua senha" />
        </FormInput>
        <FormBtn type="submit">Entrar</FormBtn>
      </MainForm>
      <SubTitle>Ainda não possui uma conta?</SubTitle>
      <SwitchPageBtn
        onClick={() => {
          setIsLoaded(false);
          navigate("/register");
        }}
      >
        Cadastre-se
      </SwitchPageBtn>
    </FormContainer>
  );
};
