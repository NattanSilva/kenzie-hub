import {
  RegisterContainer,
  Form,
  MainTitle,
  SubTitle,
  MainForm,
  FormInput,
  InputTitle,
  InputContent,
  FormButton,
} from "./styles";

export const Register = () => {
  return (
    <RegisterContainer>
      <Form>
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
            <InputContent
              type="password"
              placeholder="Confirme aqui sua senha"
            />
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
            <InputTitle>Selecionar Módulo</InputTitle>
            <InputContent type="text" placeholder="Primeiro Módulo" />
          </FormInput>
          <FormButton type="submit">Cadastrar</FormButton>
        </MainForm>
      </Form>
    </RegisterContainer>
  );
};
