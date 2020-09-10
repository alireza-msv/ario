import styled, { css } from 'styled-components';
import FlexDirection from '~/types/theme/FlexDirection';
import FlexAlignItems from '~/types/theme/FlexAlignItems';
import FlexJustifyContent from '~/types/theme/FlexJustifyContent';
import Col from '../Col';

interface RowProps {
  noGutters?: boolean,
  direction?: FlexDirection,
  noWrap?: boolean,
  alignItems?: FlexAlignItems,
  justifyContent?: FlexJustifyContent,
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
  margin-right: ${({ noGutters, theme }) => (noGutters ? 0 : `-${theme.grid.gutter}`)};
  margin-left: ${({ noGutters, theme }) => (noGutters ? 0 : `-${theme.grid.gutter}`)};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ noGutters }) => (noGutters && css`
    ${Col} {
      padding-right: 0;
      padding-left: 0;
    };
  `)}
`;

Row.defaultProps = {
  noGutters: false,
  direction: FlexDirection.Row,
  noWrap: false,
  alignItems: FlexAlignItems.Stretch,
  justifyContent: FlexJustifyContent.Start,
};

export default Row;
