import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    
    background-color: ${(props) => props.theme['--gray-700']} ;
    color: ${(props) => props.theme['--gray-100']};
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }
`
