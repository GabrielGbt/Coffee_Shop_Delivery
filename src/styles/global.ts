import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    html {
      padding: 0;
      margin: 0;
      font-size: 50%;
      size: 50%;
    }

    body {
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
  }

  @media (min-width: 768px) {
    body {
      padding: 0 15rem;
      -webkit-font-smoothing: antialiased;
    }
  }

  @media (max-width: 1500px) {
    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  :focus {
    border: 0;
    outline: 0;
    box-shadow: 0 0 0 0px;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

  button:active {
    outline: 0;
  }
`