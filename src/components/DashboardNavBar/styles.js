import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray-3);

  @media (min-width: 760px) {
    height: 6rem;
  }

  @media (min-width: 1000px) {
    height: 4.5rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 296px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 360px) {
    width: 336px;
  }

  @media (min-width: 370px) {
    width: 348px;
  }

  @media (min-width: 381px) {
    width: 380px;
  }

  @media (min-width: 400px) {
    width: 390px;
  }

  @media (min-width: 420px) {
    width: 400px;
  }

  @media (min-width: 760px) {
    width: 720px;
  }

  @media (min-width: 800px) {
    width: 780px;
  }

  @media (min-width: 880px) {
    width: 860px;
  }

  @media (min-width: 1000px) {
    width: 900px;
  }
`;

export const HeaderLogo = styled.img`
  width: 6.875rem;
  height: 1rem;

  @media (min-width: 760px) {
    height: 2.5rem;
    width: 10rem;
  }

  @media (min-width: 1000px) {
    height: 1rem;
    width: 6.875rem;
  }
`;

export const LogoutBtn = styled.button`
  width: 3.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-3);
  border-radius: var(--form-border-radius);
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--gray-0);
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--gray-2);
  }

  @media (min-width: 760px) {
    width: 6rem;
    height: 3rem;
    font-size: 1.3rem;
  }

  @media (min-width: 1000px) {
    width: 3.5rem;
    height: 2rem;
    font-size: 0.75rem;
  }
`;
