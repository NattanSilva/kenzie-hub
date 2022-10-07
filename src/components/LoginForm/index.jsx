import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Api from "../../services/Api";
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

export const LoginForm = ({ setIsLoaded }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logUser = (data) => {
    Api.post("/sessions", data)
      .then((res) => {
        navigate("/dashboard");
        return res;
      })
      .catch((err) => {
        switch (err.request.status) {
          case 401:
            alert("Falha: Email e/ou Senha unválidos!");
            break;
        }
        return err;
      });

    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(logUser)}>
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
          <p>{errors.email?.message}</p>
        </FormInput>
        <FormInput>
          <InputTitle htmlFor="password">Senha</InputTitle>
          <InputContent
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
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
