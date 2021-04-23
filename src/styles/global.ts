import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FF9738;
    --secondary-color: #12499F;

    --shape: #FFFFFF;
    --text-body: #2C2C2C;

    --input-background: #FF973819;
    --input-border: #CED1D69A;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--primary-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Myriad Pro', 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
