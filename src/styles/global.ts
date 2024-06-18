import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap");

  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  body {
    background: #f5f5f5;
  }
`;
