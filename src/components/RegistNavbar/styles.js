import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24rem;

  img {
    width: 6.125rem;
    height: 1rem;

    @media (min-width: 760px) {
      height: 2.5rem;
      width: 10rem;
    }

    @media (min-width: 1100px) {
      width: 7.625rem;
      height: 1.25rem;
    }
  }

  @media (min-width: 360px) {
    margin-top: 8rem;
  }

  @media (width: 375px) {
    margin-top: 14rem;
  }

  @media (min-width: 380px) {
    margin-top: 6rem;
  }

  @media (width: 390px) {
    margin-top: 10rem;
  }

  @media (min-width: 400px) {
    margin-top: 2rem;
  }

  @media (width: 414px) {
    margin-top: 8rem;
  }

  @media (width: 428px) {
    margin-top: 6rem;
  }

  @media (min-width: 760px) {
    margin-top: 16rem;
  }

  @media (min-width: 1100px) {
    margin-top: 24rem;
  }
`;

export const BackBtn = styled.button`
  width: 5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: var(--gray-0);
  background: var(--gray-3);
  border-radius: 0.25rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--gray-2);
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
  }

  @media (min-width: 760px) {
    width: 6rem;
    height: 4rem;
    font-size: 1.3rem;
  }

  @media (min-width: 1100px) {
    width: 4.25rem;
    height: 2.5rem;
    font-size: 0.75rem;
  }
`;
