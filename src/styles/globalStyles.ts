import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0; 
    outline: 0; 
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    max-width: 1440px;
    margin: 0 auto;
    scroll-behavior: smooth;
    
    font-size: 100%; 

    @media screen and (max-width: 1024px) {
      font-size: 93.75%; 
    }

    @media screen and (max-width: 768px) {
      font-size: 87.5%; 
    }

    @media screen and (max-width: 480px) {
      font-size: 81.25%; 
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
