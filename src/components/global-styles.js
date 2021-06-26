import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  :root {
    /* background colors */
    --calculator-background-color: #696969;

    /* font */
    --main-font: 'Orbitron', sans-serif;

    /* calculator dimensions */
    --calculator-height: 72%;
    --calculator-width: 36%;
  }

  /*
  media query for tablet or smaller screen
  */

  @media screen and (max-width: 1024px) {
    :root {
      /* calculator dimensions */
      --calculator-height: 100%;
      --calculator-width: 100%;
    }
  }

  /*
  app CSS reset
  */

  body,
  div,
  p {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles
