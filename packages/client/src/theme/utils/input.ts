import { DefaultTheme } from 'styled-components';
import { stripUnit } from 'polished';

export const propsToHeight = (
  theme: DefaultTheme,
  sm: boolean,
  lg: boolean,
): string => {
  if (lg) {
    return theme.sizes.inputHeight.lg;
  }

  if (sm) {
    return theme.sizes.inputHeight.sm;
  }

  return theme.sizes.inputHeight.md;
};

export const propsToBorderRadius = (
  theme: DefaultTheme,
  rounded: boolean,
  sm: boolean,
  lg: boolean,
): string => {
  if (rounded) {
    const height = stripUnit(propsToHeight(theme, sm, lg));
    return `${(height as number) / 2}px`;
  }

  return theme.borderRadiuses.sm;
};

export default {
  propsToHeight,
  propsToBorderRadius,
};
