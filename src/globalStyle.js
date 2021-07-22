import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body{
color: ${({theme}) => theme.mode === 'light' ? "dark" : "white"};
}
`

export default GlobalStyle;

export const themes = {
    light:{
        mode:'light'
    },
    dark:{
        mode:'dark'
    }
}

