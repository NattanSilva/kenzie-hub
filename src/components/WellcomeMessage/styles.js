import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 8.25rem;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  border-bottom: 1px solid var(--gray-3);
`;

export const MainContainer = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const UserSaudation = styled.h3`
  font-size: 1.125rem;
  color: var(--gray-0);
`;

export const UserModule = styled.p`
  font-size: 0.75rem;
  color: var(--gray-1);
`;
