import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { TechsContext } from "../../providers/TechsContext";
import {
  FormBtn,
  FormErrorMessage,
  FormInput,
  FormInputBox,
  FormLabel,
  FormSelect,
  Modal,
  ModalCloseBtn,
  ModalContainer,
  ModalForm,
  ModalHeader,
  ModalTitle,
  SelectOption,
} from "./styles";

const schema = yup.object({
  title: yup.string().required("Nome é obrigatorio"),
  status: yup.string().required("Nível obrigatório"),
});

export const CreateModal = () => {
  const { setActiveModal, createTech } = useContext(TechsContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registTech = (data) => {
    createTech(data);
    reset();
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <ModalTitle>Cadastrar Tecnologia</ModalTitle>
          <ModalCloseBtn onClick={() => setActiveModal(false)}>x</ModalCloseBtn>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit(registTech)}>
          <FormInputBox>
            <FormLabel htmlFor="title">Nome</FormLabel>
            <FormInput
              type="text"
              id="title"
              placeholder="Digite a tecnologia"
              {...register("title")}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormInputBox>
          <FormInputBox>
            <FormLabel htmlFor="status">status</FormLabel>
            <FormSelect id="status" {...register("status")}>
              <SelectOption value="Iniciante" key="Iniciante">
                Iniciante
              </SelectOption>
              <SelectOption value="Intermediário" key="Intermediário">
                Intermediário
              </SelectOption>
              <SelectOption value="Avançado" key="Avançado">
                Avançado
              </SelectOption>
            </FormSelect>
          </FormInputBox>
          <FormBtn type="submit">Cadastrar</FormBtn>
        </ModalForm>
      </Modal>
    </ModalContainer>
  );
};
