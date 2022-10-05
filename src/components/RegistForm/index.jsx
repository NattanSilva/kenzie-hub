import {
  FormContainer,
  MainForm,
  MainTitle,
  SubTitle,
  FormInput,
  InputTitle,
  InputContent,
  FormBtn,
} from "../LoginForm/styles";
import StyledSelect from "../StyledSelect";

export const RegistForm = () => {
  return (
    <FormContainer className="register">
      <MainTitle>Crie sua conta</MainTitle>
      <SubTitle>Rapido e grátis, vamos nessa</SubTitle>
      <MainForm>
        <FormInput>
          <InputTitle>Nome</InputTitle>
          <InputContent type="text" placeholder="Digite aqui seu nome" />
        </FormInput>
        <FormInput>
          <InputTitle>Email</InputTitle>
          <InputContent type="email" placeholder="Digite aqui seu email" />
        </FormInput>
        <FormInput>
          <InputTitle>Senha</InputTitle>
          <InputContent type="password" placeholder="Digite aqui sua senha" />
        </FormInput>
        <FormInput>
          <InputTitle>Confirmar Senha</InputTitle>
          <InputContent type="password" placeholder="Confirme sua senha" />
        </FormInput>
        <FormInput>
          <InputTitle>Bio</InputTitle>
          <InputContent type="text" placeholder="Fale sobre você" />
        </FormInput>
        <FormInput>
          <InputTitle>Contato</InputTitle>
          <InputContent type="text" placeholder="Opção de contato" />
        </FormInput>
        <FormInput>
          <InputTitle>Módulo</InputTitle>
          <StyledSelect />
        </FormInput>
        <FormBtn type="submit">Cadastrar</FormBtn>
      </MainForm>
    </FormContainer>
  );
};
