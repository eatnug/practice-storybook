import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html, body, #root{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;
