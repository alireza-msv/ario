import { css, FlattenSimpleInterpolation } from 'styled-components';
import Breakpoint from '~/types/theme/Breakpoint';
import theme from '../theme';

const respondTo = (breakpoint: Breakpoint, content: FlattenSimpleInterpolation): FlattenSimpleInterpolation => css`
  @media(min-width: ${theme.breakpoints[breakpoint]}) {
    ${content}
  }
`;

export default respondTo;
