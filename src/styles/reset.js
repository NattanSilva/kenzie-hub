import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #FF577F;
    --primary-50: #FF427F;
    --primary-disable: #59323F;

    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;
    --gray-0: #F8F9FA;

    --feedback-sucess: #3FE864;
    --feedback-error: #E83F5B;

    --white-fixed: #FFFFFF;
    --black-fixed: #000000;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  html, 
  body {
    background: var(--black-fixed);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .3s ease-in-out;
  }

  img {
    width: 100%;
  }
`;

export default GlobalStyle;
