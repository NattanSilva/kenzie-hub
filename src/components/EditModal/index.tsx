import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IEditedStatus, TechsContext } from "../../providers/TechsContext";
import {
  FormDeleteBtn,
  FormFooter,
  FormInput,
  FormInputBox,
  FormLabel,
  FormSaveBtn,
  FormSelect,
  Modal,
  ModalCloseBtn,
  ModalContainer,
  ModalForm,
  ModalHeader,
  ModalTitle,
  SelectOption,
} from "../CreateModal/styles";

const schema = yup.object({
  status: yup.string(),
});

export const EditModal = () => {
  const {
    editTech,
    deleteTech,
    setActiveModal,
    setModalType,
    actualEditTech: { id: itemID, title },
  } = useContext(TechsContext);
  const { register, handleSubmit, reset } = useForm<IEditedStatus>({
    resolver: yupResolver(schema),
  });

  const handleEditTech = (data: IEditedStatus) => {
    editTech(itemID, data);
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <ModalTitle>Tecnologia Detalhes</ModalTitle>
          <ModalCloseBtn
            onClick={() => {
              setActiveModal(false);
              setModalType("");
            }}
          >
            x
          </ModalCloseBtn>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit(handleEditTech)}>
          <FormInputBox>
            <FormLabel htmlFor="title">Nome do projeto</FormLabel>
            <FormInput
              disabled
              type="text"
              id="title"
              placeholder="Digite a tecnologia"
              value={title}
            />
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
          <FormFooter>
            <FormSaveBtn type="submit">Salvar alterações</FormSaveBtn>
            <FormDeleteBtn
              type="button"
              onClick={() => {
                deleteTech(itemID);
              }}
            >
              Excluir
            </FormDeleteBtn>
          </FormFooter>
        </ModalForm>
      </Modal>
    </ModalContainer>
  );
};
