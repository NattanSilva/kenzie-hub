import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LoadingContext } from "../../providers/LoadingContext";
import { ILogUser, UserContext } from "../../providers/UserContext";
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

const schema = yup.object({
  email: yup
    .string()
    .email("Dever ser um email válido!")
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(8, "Mínimo de 8 caracteres")
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
  } = useForm<ILogUser>({
    resolver: yupResolver(schema),
  });

  const login = async (data: ILogUser) => {
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
