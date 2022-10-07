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

  @media (min-width: 760px) {
    gap: 1.5rem;
  }

  @media (min-width: 1000px) {
    width: 22.5rem;
    gap: 1.25rem;
  }

  h3,
  label {
    color: var(--gray-0);
  }

  p,
  span {
  }

  button {
    width: 100%;
    height: 2.375rem;
    font-size: 0.75rem;
    color: var(--white-fixed);

    @media (min-width: 400px) {
      font-size: 1rem;
    }

    @media (min-width: 760px) {
      height: 4rem;
      font-size: 1.3rem;
    }

    @media (min-width: 1000px) {
      height: 3rem;
      font-size: 1rem;
    }
  }
`;

export const MainTitle = styled.h3`
  font-size: 1rem;

  @media (min-width: 400px) {
    font-size: 1.2rem;
  }

  @media (min-width: 760px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.125rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 0.625rem;
  color: var(--gray-1);

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

export const MainForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 760px) {
    gap: 1.5rem;
  }

  @media (min-width: 1000px) {
    gap: 1.25rem;
  }
`;

export const FormInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputTitle = styled.label`
  font-size: 0.625rem;

  @media (min-width: 400px) {
    font-size: 0.8rem;
  }

  @media (min-width: 760px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.75rem;
  }
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

  @media (min-width: 400px) {
    height: 2.5rem;
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    height: 4rem;
    font-size: 1.3rem;
  }

  @media (min-width: 1000px) {
    height: 3rem;
    font-size: 1rem;
  }
`;

export const FormBtn = styled.button`
  background: var(--primary);
  font-weight: 500;
  font-size: 0.75rem;

  &:hover {
    background: var(--primary-50);
  }
`;

export const SwitchPageBtn = styled.button`
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

  @media (min-width: 400px) {
    font-size: 1rem;
  }

  @media (min-width: 760px) {
    height: 4rem;
    font-size: 1.3rem;
  }

  @media (min-width: 1000px) {
    height: 3rem;
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.5rem;
  font-weight: 500;
  color: var(--feedback-negative);

  @media (min-width: 400px) {
    font-size: 0.625rem;
  }

  @media (min-width: 760px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.65rem;
  }
`;
