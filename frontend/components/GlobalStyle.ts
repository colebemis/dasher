import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: system-ui, sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`

export default GlobalStyle
