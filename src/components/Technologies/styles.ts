import styled from "styled-components";

export const TechsContainer = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

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
    margin-bottom: 2.5rem;
  }

  @media (min-width: 800px) {
    width: 780px;
  }

  @media (min-width: 880px) {
    width: 860px;
  }

  @media (min-width: 1000px) {
    width: 900px;
    margin-bottom: 1.5rem;
  }
`;

export const TechsHeader = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem 0;

  @media (min-width: 700px) {
    margin: 2.5rem 0;
  }

  @media (min-width: 1000px) {
    margin: 1.25rem 0;
  }
`;

export const TechsMainTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-0);

  @media (min-width: 700px) {
    font-size: 2rem;
  }

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;

export const AddTechBtn = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-3);
  border-radius: var(--form-border-radius);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white-fixed);

  &:hover {
    background: var(--gray-2);
  }

  @media (min-width: 700px) {
    width: 4rem;
    height: 4rem;
    font-size: 2.5rem;
  }

  @media (min-width: 1000px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
  }
`;

export const TechsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.375rem 0.5rem;
  background: var(--gray-3);
  border-radius: var(--form-border-radius);

  @media (min-width: 700px) {
    padding: 2rem 1rem;
  }

  @media (min-width: 1000px) {
    padding: 1.375rem;
  }
`;

export const TechItem = styled.li`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  background: var(--gray-4);

  &.Avançado {
    background: var(--gray-2);
  }

  &.void {
    background: transparent;
  }

  @media (min-width: 700px) {
    height: 4.5rem;
  }

  @media (min-width: 1000px) {
    height: 3rem;
    padding: 0 0 0 0.75rem;
  }
`;

export const ItemHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1000px) {
    width: 92%;
  }
`;

export const ItemTitle = styled.button`
  justify-content: start;
  background: none;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--gray-0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.875rem;
  }
`;

export const ItemStatus = styled.button`
  justify-content: end;
  background: none;
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--gray-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 700px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.75rem;
  }
`;

export const ItemFooter = styled.div`
  display: none;

  @media (min-width: 1000px) {
    width: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemRemoveBtn = styled.button`
  display: none;
  background: none;

  &:hover {
    scale: 1.2;
  }

  img {
    min-width: 0.875rem;
    min-height: 0.875rem;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1000px) {
    width: 0.875rem;
    height: 0.875rem;
    display: flex;
  }
`;

export const VoidTitle = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: var(--gray-1);

  @media (min-width: 375px) {
    font-size: 1rem;
  }

  @media (min-width: 700px) {
    font-size: 1.8rem;
  }

  @media (min-width: 700px) {
    font-size: 1rem;
  }
`;
