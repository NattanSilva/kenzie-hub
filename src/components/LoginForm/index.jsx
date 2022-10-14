import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingContext } from "../../providers/LoadingContext";
import { useContext } from "react";
import {
  ErrorMessage,
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
import { UserContext } from "../../providers/UserContext";

const schema = yup.object({
  email: yup
    .string()
    .email("Dever ser um email válido!")
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Senha obrigatória"),
});

export const LoginForm = () => {
  const { setIsLoaded } = useContext(LoadingContext);
  const { logUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const login = async (data) => {
    logUser(data);
    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(login)}>
      <MainTitle>Login</MainTitle>
      <MainForm>
        <FormInput>
          <InputTitle htmlFor="email">Email</InputTitle>
          <InputContent
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </FormInput>
        <FormInput>
          <InputTitle htmlFor="password">Senha</InputTitle>
          <InputContent
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </FormInput>
        <FormBtn type="submit">Entrar</FormBtn>
      </MainForm>
      <SubTitle>Ainda não possui uma conta?</SubTitle>
      <SwitchPageBtn
        onClick={() => {
          setIsLoaded(false);
        }}
        to="/register"
      >
        Cadastre-se
      </SwitchPageBtn>
    </FormContainer>
  );
};
