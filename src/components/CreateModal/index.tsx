import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ICreatedTech, TechsContext } from "../../providers/TechsContext";
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
  const { setActiveModal, createTech, setModalType } = useContext(TechsContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreatedTech>({
    resolver: yupResolver(schema),
  });

  const registTech = (data: ICreatedTech) => {
    createTech(data);
    reset();
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <ModalTitle>Cadastrar Tecnologia</ModalTitle>
          <ModalCloseBtn
            onClick={() => {
              setActiveModal(false);
              setModalType("");
            }}
          >
            x
          </ModalCloseBtn>
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
            <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
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
