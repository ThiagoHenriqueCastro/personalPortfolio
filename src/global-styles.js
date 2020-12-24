import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #fff3c7;
        color: #333333;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
    *{
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
        box-sizing: border-box;
    }
    `;
