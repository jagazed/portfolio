import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.text};
        line-height: 1.2;
        min-width: 375px;
    }
    
    a {
        text-decoration: none;
        color: ${theme.colors.link};
        cursor: pointer;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.link};
    }
    
    section {
        padding: 100px 0;
        
        @media ${theme.media.mobile} {
            padding: 40px 0;
        }
    }
    
    section:nth-of-type(1){
        padding: 0;
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }

    section:nth-last-of-type(1) {
        background-color: ${theme.colors.sectionLine};
    }
    
    h3 {
        margin: 15px 0;
        font-size: 28px;
        font-weight: 500;
        @media ${theme.media.mobile} {
            margin: 10px 0 7px;
        }
    }
    
    p {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.4;
    }
`