/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { rgba } from 'polished';
import TextDirection from '~/types/theme/TextDirection';
import TextAlign from '~/types/theme/TextAlign';
import {
  propsToHeight,
  propsToBorderRadius,
} from '~/theme/utils/input';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  direction?: TextDirection,
  textAlign?: TextAlign,
  sm?: boolean,
  lg?: boolean,
  rounded?: boolean,
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: ${({ theme, sm, lg }) => propsToHeight(theme, sm, lg)};
  font: ${({ theme }) => (
    `${theme.fontWeights.regular} ${theme.font.size} ${theme.font.family}`
  )};
  border-radius: ${({
    theme,
    sm,
    lg,
    rounded,
  }) => propsToBorderRadius(theme, rounded, sm, lg)};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  padding: ${({ theme }) => `${theme.paddings.sm}`};
  transition-property: border-color, color, box-shadow;
  transition-duration: ${({ theme }) => theme.transitions.fast};
  direction: ${({ direction }) => direction};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ theme }) => theme.colors.gray800};
  background-color: ${({ theme }) => theme.colors.foreground};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary500};
    box-shadow: 0 0 0 1px ${({ theme }) => rgba(theme.colors.primary500, 0.7)};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.gray400};
    background-color: inherit;
  }
`;

Input.defaultProps = {
  textAlign: TextAlign.Inherit,
  direction: TextDirection.Inherit,
  sm: false,
  lg: false,
  rounded: false,
};

export default Input;
