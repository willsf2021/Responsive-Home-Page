import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      overflow-x: hidden;          
    }
    body {
      height: 100vh;
      max-width: 768px;    
      overflow-x: hidden;     
      margin: auto; 
    }

    @media (min-width: 768px) {
      body {
        max-width:1440px
      }
    }
`;

export default GlobalStyles;
