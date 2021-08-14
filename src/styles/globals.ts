import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

export const GlobalStyles: GlobalStyleComponent<
  unknown,
  DefaultTheme
> = createGlobalStyle`

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    src: local('Ubuntu Regular'),
      url('/fonts/ubuntu-v15-latin-regular.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    src: local('Ubuntu SemiBold'),
      url('/fonts/ubuntu-v15-latin-500.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    src: local('Ubuntu Bold'),
      url('/fonts/ubuntu-v15-latin-700.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.md};
      background: ${theme.colors.primary};
    }

    html {
      font-size: 62.5%;
    }
  `}
`;
