import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Roboto Slab", serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #0ba0b1;
  }

  .perso a {
    width: 15px;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;