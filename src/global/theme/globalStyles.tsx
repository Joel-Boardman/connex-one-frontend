import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  code {
    font-family: "Rubik", source-code-pro, Menlo, Monaco, Consolas,
      "Courier New", monospace;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
    /* font-size: 62.5%; */
    height: 100%;
    margin: 0;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    font-family: "Rubik", Helvetica, Arial, Sans-Serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    background: rgb(10, 25, 41);
  }

  .border {
    max-width: 1350px;
    height: 100%;
    margin: 0 auto;
    padding: 0 4.6rem;
  }

  

`;
