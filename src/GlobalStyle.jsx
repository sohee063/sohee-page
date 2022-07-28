import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    
    
  }
  
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    scrollbar-width: none;
    overflow-y: scroll;

 }
 body ::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}


`;

export default GlobalStyle;
