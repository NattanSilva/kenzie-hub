import styled from "styled-components";

export const MainDevelop = styled.div`
  width: 100%;
  min-height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 760px) {
    min-height: 16rem;
  }

  @media (min-width: 1000px) {
    min-height: 9rem;
  }
`;

export const DevelopContainer = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.875rem;

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
    gap: 1.5rem;
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

export const DevelopSubtitle = styled.p`
  font-size: 1rem;
  color: var(--white-fixed);

  @media (min-width: 760px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;
