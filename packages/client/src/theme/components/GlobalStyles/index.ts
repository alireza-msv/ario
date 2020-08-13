import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: ${({ theme }) => theme.font.size};
    height: 100vh;
    height: -webkit-fill-available;
    height: -moz-available;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  a, a:visited {
    text-decoration: none;
    color: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: inherit;
  }
  #app {
    height: 100%;
  }
`;

export default GlobalStyles;
