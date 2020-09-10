import { css, FlattenSimpleInterpolation } from 'styled-components';
import Breakpoint from '~/types/theme/Breakpoint';
import theme from '../theme';

export const breakpointToMediaString = (breakpoint: Breakpoint): string => (
  `min-width: ${theme.breakpoints[breakpoint]}`
);

export const respondTo = (breakpoint: Breakpoint, content: FlattenSimpleInterpolation): FlattenSimpleInterpolation => css`
  @media(${breakpointToMediaString(breakpoint)}) {
    ${content}
  }
`;

export default {
  breakpointToMediaString,
  respondTo,
};
