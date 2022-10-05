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
  }
`;

export const BackBtn = styled.button`
  width: 5rem;
  height: 2rem;
  font-size: 10px;
  font-weight: 600;
  color: var(--gray-0);
  background: var(--gray-3);
  border-radius: 0.25rem;

  &:hover {
    background: var(--gray-2);
  }
`;
