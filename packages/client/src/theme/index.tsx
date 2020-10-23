import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Roboto from './fonts/Roboto';
import GlobalStyles from './components/GlobalStyles';

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Roboto />
    <GlobalStyles />
    { children }
  </ThemeProvider>
);

export { theme };
export default Theme;
