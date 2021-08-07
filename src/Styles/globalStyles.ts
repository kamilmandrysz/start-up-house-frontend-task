import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
    @font-face {
    font-family: "Nunito";
    font-style: "light";
    font-weight: 200;
    src: local("Nunito Light"), local("Nunito-Light"),
        url("../Assets/fonts/Nunito-Light.ttf") format("ttf");
    font-display: swap;
    }

    @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    src: local("Nunito Regular"), local("Nunito-Regular"),
        url("../Assets/fonts/Nunito-Regular.ttf") format("ttf");
    font-display: swap;
    }

    @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    src: local("Nunito SemiBold"), local("Nunito-SemiBold"),
        url("../Assets/fonts/Nunito-SemiBold.ttf") format("ttf");
    font-display: swap;
    }

    @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    src: local("Nunito Bold"), local("Nunito-Bold"),
        url("../Assets/fonts/Nunito-Bold.ttf") format("ttf");
    font-display: swap;
    }

    box-sizing: border-box;
    }   

    body,html {
        margin: 0;
        padding: 0;
    }

    body {
        min-width: 325px;
        font-family: "Nunito", sans-serif;
        -webkit-font-smoothing: antialiased;
    }


    button {
        font: 400 1rem "Nunito", sans-serif;
    }

    .animation-appear {
        opacity: 0;
    }

    .animation-appear.animation-appear-active {
        opacity: 1;
        transition: opacity 300ms;
    }

`;

export default GlobalStyle;
