import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    border: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    outline: none;
    padding: 0;
    text-decoration: none;
  }

  body, section {
    background: var(--background-color);
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  span, h1, h2, h3 {
    color: var(--font-color);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--scrollbar-background);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar-color);
  }

  .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
