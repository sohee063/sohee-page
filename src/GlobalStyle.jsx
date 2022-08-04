import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    transition-timing-function:ease-in-out;
    transition: 50ms;
  }

  html {
    scroll-behavior: smooth;
    /* overflow-x:hidden; */
  }
  
  body {
    line-height: 1.5;
    scrollbar-width: none;
    overflow-y: scroll;
    /* overflow-x:hidden; */

 }

 body ::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
::-webkit-scrollbar {
  display: none;
  overflow-y: scroll;
}

`;

export default GlobalStyle;
