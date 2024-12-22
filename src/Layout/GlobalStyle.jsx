// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #094021;  /* Verde scuro */
    --color-secondary: #F2E3B6; /* Beige chiaro */
    --color-tertiary: #8C512E; /* Marrone */
    --color-quaternary: #F2AA80; /* Arancione chiaro */
    --color-accent: #D95032; /* Rosso-arancio */
    --color-dark: #1c111e; /* Nero */
  }

   @font-face {
        font-family: 'TAN Moonlight';
        src: url('../Assets/Fonts/TAN Moonlight Display.otf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalStyle;