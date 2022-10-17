import styled, { keyframes } from "styled-components";

export const PopUp = keyframes`
  0% {
    scale: 0; 
  }

  50% {
    scale: 1.1;
  }

  100% {
    scale: 1;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black-50);
  position: fixed;
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--form-border-radius);
  background: var(--gray-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  animation: ${PopUp} 0.5s;

  @media (min-width: 360px) {
    width: 336px;
  }

  @media (min-width: 370px) {
    width: 348px;
  }

  @media (min-width: 400px) {
    width: 390px;
  }

  @media (min-width: 760px) {
    width: 720px;
  }

  @media (min-width: 1000px) {
    width: 380px;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: var(--gray-2);

  @media (min-width: 400px) {
    height: 3rem;
  }

  @media (min-width: 760px) {
    height: 4.5rem;
    padding: 0 1.5rem;
  }

  @media (min-width: 1000px) {
    height: 3.125rem;
    padding: 0 1.25rem;
  }
`;

export const ModalTitle = styled.h3`
  color: var(--gray-0);
  font-size: 0.75rem;

  @media (min-width: 400px) {
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.875rem;
  }
`;

export const ModalCloseBtn = styled.button`
  background: transparent;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-1);

  @media (min-width: 400px) {
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;

export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem 1.5rem 1rem;
  background: var(--gray-3);

  @media (min-width: 760px) {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
    gap: 2rem;
  }

  @media (min-width: 1000px) {
    gap: 1rem;
    padding: 1.5rem 1.25rem 2rem 1.25rem;
  }
`;

export const FormInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 0.625rem;
  color: var(--gray-0);
  margin-bottom: 1rem;

  @media (min-width: 400px) {
    font-size: 0.8rem;
  }

  @media (min-width: 760px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.75rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 2.25rem;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  background: var(--gray-2);
  border-radius: var(--form-border-radius);
  font-size: 0.813;
  color: var(--gray-0);
  outline-color: var(--gray-0);

  &::placeholder {
    color: var(--gray-1);
  }

  @media (min-width: 400px) {
    height: 3rem;
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    height: 4.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    height: 3rem;
    font-size: 1rem;
  }
`;

export const FormErrorMessage = styled.p`
  font-size: 0.625rem;
  color: var(--feedback-negative);
  margin-top: 0.5rem;

  @media (min-width: 400px) {
    font-size: 0.8rem;
  }

  @media (min-width: 760px) {
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.7rem;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 2.25rem;
  display: flex;
  align-items: center;
  padding: 0 0.65rem;
  background: var(--gray-2);
  border-radius: var(--form-border-radius);
  font-size: 0.813;
  color: var(--gray-0);
  outline-color: var(--gray-0);

  @media (min-width: 400px) {
    height: 3rem;
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    height: 4.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    height: 3rem;
    font-size: 1rem;
  }
`;

export const SelectOption = styled.option`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 0.813;
  color: var(--gray-0);

  @media (min-width: 400px) {
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  height: 2.25rem;
  background: var(--primary);
  border-radius: var(--form-border-radius);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--white-fixed);

  &:hover {
    background: var(--primary-50);
  }

  @media (min-width: 400px) {
    height: 3rem;
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    height: 4.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    height: 3rem;
    font-size: 1rem;
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormSaveBtn = styled.button`
  width: 60%;
  height: 2.25rem;
  background: var(--primary);
  border-radius: var(--form-border-radius);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--white-fixed);

  &:hover {
    background: var(--primary-50);
  }

  @media (min-width: 400px) {
    height: 3rem;
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    height: 4.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    height: 3rem;
    font-size: 1rem;
  }
`;

export const FormDeleteBtn = styled.button`
  width: 32%;
  height: 2.25rem;
  background: var(--gray-1);
  border-radius: var(--form-border-radius);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--white-fixed);

  &:hover {
    background: var(--gray-2);
  }

  @media (min-width: 400px) {
    height: 3rem;
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    height: 4.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    height: 3rem;
    font-size: 1rem;
  }
`;
