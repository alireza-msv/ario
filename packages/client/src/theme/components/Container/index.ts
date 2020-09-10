import styled, { css } from 'styled-components';
import Breakpoint from '~/types/theme/Breakpoint';
import { respondTo } from '~/theme/utils/responsive';

const Container = styled.section`
  width: 100%;
  padding-right: ${({ theme }) => theme.sizes.layoutHorizontalPadding};
  padding-left: ${({ theme }) => theme.sizes.layoutHorizontalPadding};
  margin-right: auto;
  margin-left: auto;
  
  ${respondTo(Breakpoint.SM, css`
    width: 540px;
  `)}
  ${respondTo(Breakpoint.MD, css`
    width: 720px;
  `)}
  ${respondTo(Breakpoint.LG, css`
    width: 960px;
  `)}
  ${respondTo(Breakpoint.XL, css`
    width: 1140px;
  `)}
  ${respondTo(Breakpoint.XXL, css`
    width: 1500px;
  `)}
`;

export default Container;
