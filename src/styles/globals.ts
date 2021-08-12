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
      font-size: ${theme.font.sizes.md};
      background: ${theme.colors.primary};
    }

    html {
      font-size: 62.5%;
    }
  `}
`;
