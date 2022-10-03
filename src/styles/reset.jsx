const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  list-style: none;
  text-decoration: none;

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
