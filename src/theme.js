const fontSizes = [12, 14, 16, 20, 24, 32, 64];
fontSizes.xxs = fontSizes[0];
fontSizes.xs = fontSizes[1];
fontSizes.s = fontSizes[2];
fontSizes.m = fontSizes[3];
fontSizes.l = fontSizes[4];
fontSizes.xl = fontSizes[5];
fontSizes.xxl = fontSizes[6];

export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    grey: '#f0f0f0',
    text: '#2a2a2a',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6',
    darkGreyFont: '#4f4f4f',
    lightGreyFont: '#c0c0c0',
    statBgColor: '#f3f6f9',
    sectionBgColor: '#e7ecf2',
    lightBlue: '#0eb2cd',
    rowEvenColor: '#e8eff1',
  },
  space: [0, 2, 4, 8, 10, 16, 28, 40, 56, 80],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: fontSizes,
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radius: {
    none: '0',
    normal: '10px',
    round: '50%',
  },
  breakpoints: [
    '1170px',
    '@media (min-width: 56em) and (orientation: landscape)',
  ],
};
