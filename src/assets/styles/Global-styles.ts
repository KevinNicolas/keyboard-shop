import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    border: none;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
    text-decoration: none;
  }

  body, section {
    background: var(--background-color);
    height: 100vh;
    width: 100vw;
  }

  span, h1, h2, h3 {
    color: var(--font-color);
  }
`;
