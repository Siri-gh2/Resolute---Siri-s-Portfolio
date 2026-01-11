import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0b0d10;
    color: #eaeaea;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
