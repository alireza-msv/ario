import styled, {
  css,
  FlattenSimpleInterpolation, // eslint-disable-line
} from 'styled-components';
import { respondTo } from '~/theme/utils/responsive';
import Breakpoint from '~/types/theme/Breakpoint';

type ColSize = number | 'auto';

interface ColProps {
  xs?: ColSize,
  sm?: ColSize,
  md?: ColSize,
  lg?: ColSize,
  xl?: ColSize,
  xxl?: ColSize,
}

const cssFlexGrow1: FlattenSimpleInterpolation = css`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

const cssFlexAuto: FlattenSimpleInterpolation = css`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

const cssFlexGrid = (width: string): FlattenSimpleInterpolation => css`
  flex: 0 0 ${width}%;
  max-width: ${width}%;
`;

const mapSizeToCss = (size: ColSize, cols: number): FlattenSimpleInterpolation => {
  if (typeof size === 'undefined') {
    return null;
  }

  if (size === 'auto') {
    return cssFlexAuto;
  }

  if (size < 0 || size > cols) {
    throw new Error(`size should be between 0 and ${cols}`);
  }

  if (size === 0) {
    return cssFlexGrow1;
  }

  const colWidth = 100 / cols;

  return cssFlexGrid((size * colWidth).toFixed(3));
};

const Col = styled.div<ColProps>`
  ${({ xs, theme }) => mapSizeToCss(xs, theme.grid.cols)};
  ${({ sm, theme }) => respondTo(Breakpoint.SM, mapSizeToCss(sm, theme.grid.cols))};
  ${({ md, theme }) => respondTo(Breakpoint.MD, mapSizeToCss(md, theme.grid.cols))};
  ${({ lg, theme }) => respondTo(Breakpoint.LG, mapSizeToCss(lg, theme.grid.cols))};
  ${({ xl, theme }) => respondTo(Breakpoint.XL, mapSizeToCss(xl, theme.grid.cols))};
  ${({ xxl, theme }) => respondTo(Breakpoint.XXL, mapSizeToCss(xxl, theme.grid.cols))};
  padding-right: ${({ theme }) => theme.grid.gutter};
  padding-left: ${({ theme }) => theme.grid.gutter};
`;

Col.defaultProps = {
  xs: 0,
};

export default Col;
