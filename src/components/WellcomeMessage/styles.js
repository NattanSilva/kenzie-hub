import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 8.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.75rem;
  margin-top: 4.5rem;
  border-bottom: 1px solid var(--gray-3);

  @media (min-width: 760px) {
    min-height: 14rem;
  }

  @media (min-width: 1000px) {
    min-height: 7.5rem;
  }
`;

export const MainContainer = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const UserSaudation = styled.h3`
  font-size: 1.125rem;
  color: var(--gray-0);

  @media (min-width: 760px) {
    font-size: 2rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.125rem;
  }
`;

export const UserModule = styled.p`
  font-size: 0.75rem;
  color: var(--gray-1);

  @media (min-width: 760px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.75rem;
  }
`;
