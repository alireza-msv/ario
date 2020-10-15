import { css, FlattenSimpleInterpolation } from 'styled-components';
import PaddingSize from '~/types/theme/PaddingSize';
import theme from '../theme';

export const paddingSizeToCss = (
  vertical: PaddingSize,
  horizontal: PaddingSize,
): FlattenSimpleInterpolation => {
  if (vertical === horizontal) {
    return css`padding: ${theme.paddings[vertical]}`;
  }

  return css`padding: ${theme.paddings[vertical]} ${theme.paddings[horizontal]}`;
};

export default {
  paddingSizeToCss,
};
