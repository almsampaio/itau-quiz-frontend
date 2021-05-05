import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FF9738;
    --secondary-color: #12499F;

    --shape: #FFFFFF;
    --text-body: #2C2C2C;

    --input-background: #FF973819;
    --input-border: #CED1D69A;
    --input-focus: #FF97384D;
    --input-text: #676A79;

    --yellow-border: #FDED0B;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1200px) {
      font-size: 87.5%;
    }

    @media (max-width: 1100px) {
      font-size: 0.75rem;
    }
  }

  body {
    background: var(--primary-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Myriad Pro', 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: var(--text-body);
    letter-spacing: 0.01125rem;
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
