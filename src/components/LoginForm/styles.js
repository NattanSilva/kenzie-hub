import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0.875rem;
  background: var(--gray-3);
  border-radius: var(--form-border-radius);

  &.register {
    margin-bottom: 2.5rem;
  }

  h3,
  label {
    color: var(--gray-0);
  }

  p,
  span {
    color: var(--gray-1);
  }

  button {
    width: 100%;
    height: 2.375rem;
    font-size: 0.75rem;
    color: var(--white-fixed);
  }
`;

export const MainTitle = styled.h3`
  font-size: 1rem;
`;

export const SubTitle = styled.p`
  font-size: 0.625rem;
  color: var(--gray-1);
`;

export const MainForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputTitle = styled.label`
  font-size: 0.625rem;
`;

export const InputContent = styled.input`
  width: 100%;
  height: 2.375rem;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  background: var(--gray-2);
  font-size: 0.813rem;
  color: var(--gray-0);
  outline-color: var(--gray-0);

  &::placeholder {
    color: var(--gray-1);
  }
`;

export const FormBtn = styled.button`
  background: var(--primary);
  font-weight: 500;

  &:hover {
    background: var(--primary-50);
  }
`;

export const SwitchPageBtn = styled(Link)`
  width: 100%;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--white-fixed);
  background: var(--gray-1);
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--gray-2);
  }
`;