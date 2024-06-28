import { createGlobalStyle } from 'styled-components';
import backgroundImage from './images/seed96336.png';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: url(${backgroundImage}) no-repeat center center fixed;
        background-size: cover;
        font-family: 'Michroma', sans-serif;
        margin: 0;
        overflow-x: hidden; /* Prevents horizontal scroll */
        
    }
`;

export default GlobalStyle;
