// Source: https://github.com/zeit/next.js/blob/canary/examples/with-chakra-ui/src/theme.js
import { theme as chakraTheme } from '@chakra-ui/core';


const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace`, body: `'Work Sans', sans-serif` };

const breakpoints = ['40em', '52em', '64em'];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <path
          d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
          fill="white"
        />
      ),
      viewBox: '0 0 3000 3163',
    },
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

export default theme;
