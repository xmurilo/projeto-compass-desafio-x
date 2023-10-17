import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*
    1. Use a more-intuitive box-sizing model.
  */

  :root {
    --color-primary: #ed6d25;
    --color-background: #d9e6f7;
    --color-text: #4b4b4b;
    --color-placeholder: #868686;
    --color-input: #eff3f8;
    --color-box: #ffffff;
    --color-gray: #B4AEAE;

    --ff-base: 'Roboto Flex', sans-serif;
    --ff-search: 'Roboto Mono', sans-serif;

    --fw-thin: 100;
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-extrabold: 800;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
    padding: 0;
  }
  /*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
  body {
    color: var(--color-text);
    font-family: var(--ff-base);
    font-weight: var(--fw-regular);
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;

  }
  body::-webkit-scrollbar {
    display: none;
  }
  /*
    5. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    6. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    7. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;

  }
`;

export default GlobalStyle;
