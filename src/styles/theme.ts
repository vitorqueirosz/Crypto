export default {
  grid: {
    container: '13.6rem',
    gutter: '3.2rem',
  },
  borderRadius: {
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.6rem',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xlg: '2.0rem',
      xxlg: '2.8rem',
      hg: '5.2rem',
    },
  },
  colors: {
    primary: '#04152E',
    secondary: '#091220',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
  },
  spacings: {
    '2xs': '0.8rem',
    xs: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4.0rem',
    xlg: '4.8rem',
    xxlg: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
