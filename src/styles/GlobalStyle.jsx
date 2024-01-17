import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background-color: #121214;
        font-family: "Inter", sans-serif;
        color: #fff;
        font-weight: 500;
    }
`