import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IRegistuser, UserContext } from "../../providers/UserContext";
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
} from "../LoginForm/styles";

const schema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .email("Dever ser um email válido!")
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .required("Confime sua senha")
    .oneOf([yup.ref("password")], "Deve ser igual a senha"),
  bio: yup.string().required("Bio obtigatória"),
  contact: yup
    .string()
    .required("Contato obrigatório")
    .min(14, "Digite um número válido"),
  course_module: yup.string().required("Módulo obrigatório"),
});

export const RegistForm = () => {
  const { registUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegistuser>({
    resolver: yupResolver(schema),
  });

  const regist = (data: IRegistuser) => {
    delete data.confirmPassword;
    registUser(data);
    reset();
  };

  return (
    <FormContainer className="register">
      <MainTitle>Crie sua conta</MainTitle>
      <SubTitle>Rapido e grátis, vamos nessa</SubTitle>
      <MainForm onSubmit={handleSubmit(regist)}>
        <FormInput>
          <InputTitle>Nome</InputTitle>
          <InputContent
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </FormInput>
        <FormInput>
          <InputTitle>Email</InputTitle>
          <InputContent
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </FormInput>
        <FormInput>
          <InputTitle>Senha</InputTitle>
          <InputContent
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </FormInput>
        <FormInput>
          <InputTitle>Confirmar Senha</InputTitle>
          <InputContent
            id="confrimPassword"
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        </FormInput>
        <FormInput>
          <InputTitle>Bio</InputTitle>
          <InputContent
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <ErrorMessage>{errors.bio?.message}</ErrorMessage>
        </FormInput>
        <FormInput>
          <InputTitle>Contato</InputTitle>
          <InputContent
            type="tellphone"
            placeholder="Opção de contato - (00)00000-0000"
            {...register("contact")}
          />
          <ErrorMessage>{errors.contact?.message}</ErrorMessage>
        </FormInput>
        <FormInput>
          <InputTitle>Módulo</InputTitle>
          <select {...register("course_module")}>
            <option value="M1">M1</option>
            <option value="M2">M2</option>
            <option value="M3">M3</option>
            <option value="M4">M4</option>
            <option value="M5">M5</option>
            <option value="M6">M6</option>
          </select>
          <ErrorMessage>{errors.course_module?.message}</ErrorMessage>
        </FormInput>
        <FormBtn type="submit">Cadastrar</FormBtn>
      </MainForm>
    </FormContainer>
  );
};
