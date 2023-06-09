import { createGlobalStyle } from 'styled-components';
import colors from './colors.js';

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1 0 auto;
      display:flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      @media (max-width:767px) {
        font-size: 0.85rem;
      }
    }

    header, footer {
      flex: 0 0 auto;
    }

    article {
      padding-left: 2em;
      padding-right: 2em;
      height: 100%;
      width: 100%;
    }

    article > h2 {
      text-indent: 2em;
    }

    form {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 1em;
      font-weight: 500;
      color:  ${colors.textColor};
      background-color: ${colors.backgroundColor};
      height: 100%;
      width: 100%;
    }

    .formData {
      margin: 0.25em 0.5em;
    }

    .formData[data-error]::after {
      display: block;
      font-size: 0.85em;
      text-align: left;
      line-height: 1em;
      color: ${colors.errorColor};
      content: attr(data-error);
    }

    .formData[data-error-visible='true'] .text-control {
      border: 2px solid ${colors.errorColor};
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
