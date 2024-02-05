import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
    width: 400px;
    height: 200px;
    }

    img {
    width: 100%;
    }

    .apikey-label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    letter-spacing: 0.5px;
    }
`;

export default GlobalStyles;
