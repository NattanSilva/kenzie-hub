import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  width: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem 1.75rem;
  background: var(--gray-3);

  h3,
  label {
    color: var(--gray-0);
  }

  span,
  input::placeholder {
    color: var(--gray-1);
  }
`;

export const MainTitle = styled.h3`
  font-size: 0.875rem;
  line-height: 22px;
`;

export const SubTitle = styled.span`
  font-size: 0.625rem;
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputTitle = styled.label`
  font-size: 0.625rem;
`;

export const InputContent = styled.input`
  width: 100%;
  height: 2.375rem;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  background: var(--gray-2);
  font-size: 0.75rem;
  color: var(--gray-1);
  border-radius: 0.25rem;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 2.375rem;
  background: var(--primary-disable);
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--white-fixed);
`;
