import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*{
    box-sizing:border-box;

}

body{
    background: ${({ theme }) => theme.colors.body};
    color: #000;
    font-family: 'DynaPuff',sans-serif;
    font-size: 1.15em;
    margin:0;
}

p{
    opacity:0.6;
    line-height:1.5;
}

img{
    max-width:100%;
}
`;

export default GlobalStyles;
