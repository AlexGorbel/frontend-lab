import { createGlobalStyle } from "styled-components";
import Asap from "./fonts/Asap.ttf";
import Rochester from "./fonts/Rochester.ttf";
import Quicksand from "./fonts/Quicksand.ttf";


const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      outline: none;
    
      &,
      &::before,
      &::after {
        box-sizing: border-box;
      }
    }
    
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    a {
      text-decoration: none;
      background-color: transparent;
    
      &,
      &:hover {
        color: inherit;
      }
    
      &:not(:disabled) {
        cursor: pointer;
      }
    }
    
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
    
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre {
      margin: 0;
    }
    
    ul,
    ol {
      margin: 0;
      list-style: none;
    }
    
    button,
    input,
    optgroup,
    select,
    textarea,
    th {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      color: inherit;
      border-radius: 0;
    }
    
    input,
    textarea {
      appearance: none;
      background-color: transparent;
    }
    
    input[type='number'] {
      appearance: none;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }
    
    input::-webkit-input-placeholder {
      color: #999999;
    }
    
    input::-moz-placeholder {
      color: #999999;
    }
    
    input:-moz-placeholder {
      color: #999999;
    }
    
    input:-ms-input-placeholder {
      color: #999999;
    }
    
    img,
    svg {
      display: block;
      max-width: 100%;
    }
    
    svg {
      fill: none;
    }
    
    html,
    body {
      background-color: #CDD6CF;
      color: #000000;
      font-size: 16px;
      line-height: 1.25;
      font-weight: 400;
      font-family: 'Asap', serif;
    }
    
    #root {
      display: flex;
      flex: 1;
      flex-direction: column;
      min-height: 100vh;
      position: relative;
      width: 100%;
    }
    
    @font-face {
        font-family: "Asap";
        src: local("Asap"),
            url(${Asap});
        font-weight: 400;
        font-style: normal;
    }
    
    @font-face {
        font-family: "Rochester";
        src: local("Rochester"),
            url(${Rochester});
        font-weight: 400;
        font-style: normal;
    }
    
    @font-face {
        font-family: "Quicksand";
        src: local("Quicksand"),
            url(${Quicksand});
        font-weight: 400;
        font-style: normal;
    }
`

export default GlobalStyle;