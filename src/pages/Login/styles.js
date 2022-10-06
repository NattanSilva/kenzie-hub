import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrappContainer = styled.div`
  width: 18.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  @media (min-width: 360px) {
    width: 21rem;
  }

  @media (min-width: 370px) {
    width: 21.5rem;
  }

  @media (min-width: 380px) {
    width: 22rem;
  }

  @media (min-width: 390px) {
    width: 22.875rem;
  }

  @media (min-width: 400px) {
    width: 24rem;
  }

  @media (min-width: 760px) {
    width: 38.75rem;
  }

  @media (min-width: 1100px) {
    width: 22.5rem;
  }
`;

export const LogoType = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    height: 1rem;
    width: 6.313rem;

    @media (min-width: 760px) {
      height: 2rem;
      width: 10rem;
    }

    @media (min-width: 1100px) {
      height: 1.25rem;
      width: 9rem;
    }
  }
`;
