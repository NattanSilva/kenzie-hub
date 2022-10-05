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
  }
`;

export const BackBtn = styled(Link)`
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
`;
