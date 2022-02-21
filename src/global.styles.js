import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
        background-color: #c2c1c1;
        width: 100vw;
        height: 100vh;
}
body {  
        width: 100vw;
        height: 100vh;
        color: black;
}
a {
		text-decoration: none;
		color: black;
	}
* {
		box-sizing: border-box;
	}
`