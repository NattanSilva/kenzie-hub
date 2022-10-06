import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray-3);
`;

export const HeaderContainer = styled.div`
  width: 296px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img`
  width: 6.875rem;
  height: 1rem;
`;

export const LogoutBtn = styled.button`
  width: 3.5rem;
  height: 2rem;
  background: var(--gray-3);
  border-radius: var(--form-border-radius);
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--gray-0);

  &:hover {
    background: var(--gray-2);
  }
`;
