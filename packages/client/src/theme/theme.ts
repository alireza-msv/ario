import { DefaultTheme } from 'styled-components';
import lightColors from './light';

const theme: DefaultTheme = {
  colors: lightColors,
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    superSlow: '1000ms',
  },
  font: {
    size: '16px',
    family: 'roboto',
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  zIndex: {
    zIndex0: 0,
    zIndex1: 1,
    zIndex10: 10,
    zIndex100: 100,
    zIndex1000: 1000,
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
  },
  borderRadiuses: {
    sm: '5px',
    md: '10px',
    lg: '15px',
    xl: '20px',
    xxl: '30px',
  },
  paddings: {
    none: '0',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  sizes: {
    layoutHorizontalPadding: '30px',
    layoutVerticalPadding: '30px',
    headerHeight: '104px',
  },
  grid: {
    cols: 12,
    gutter: '15px',
  },
};

export default theme;
