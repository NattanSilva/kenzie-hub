import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #FF577F;
    --primary-50: #FF427F;
    --primary-negative: #59323F;

    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;
    --gray-0: #F8F9FA;

    --white-fixed: #FFF;
    --black-fixed: #000;
    --black-50: rgba(18, 18, 20, 0.5);

    --feedback-sucess: #3FE864;
    --feedback-negative: #E83F5B;

    --form-border-radius: .25rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
    font-family: 'Inter', sans-serif;
  }

  html {
    background: var(--gray-4);
    width: 100%;
    height: 100%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in-out;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

`;
