import { theme } from '~/theme';
import {
  propsToHeight,
  propsToBorderRadius,
} from '~/theme/utils/input';

describe('propsToHeight tests', () => {
  it('should retrun 34px when sm is true', () => {
    const height = propsToHeight(theme, true, false);
    expect(height).toBe(theme.sizes.inputHeight.sm);
  });

  it('should return 40px when neither sm nor lg is true', () => {
    const height = propsToHeight(theme, false, false);
    expect(height).toBe(theme.sizes.inputHeight.md);
  });

  it('should return 48px when lg is true', () => {
    const height = propsToHeight(theme, false, true);
    expect(height).toBe(theme.sizes.inputHeight.lg);
  });

  it('should return 48px when both sm and lg are true', () => {
    const height = propsToHeight(theme, true, true);
    expect(height).toBe(theme.sizes.inputHeight.lg);
  });
});

describe('propsToBorderRadius tests', () => {
  it('should return 17px when sm and rounded are true', () => {
    const borderRadius = propsToBorderRadius(theme, true, true, false);
    expect(borderRadius).toBe('17px');
  });

  it('should return 20px when rounded is true but neither sm nor lg is true', () => {
    const borderRadius = propsToBorderRadius(theme, true, false, false);
    expect(borderRadius).toBe('20px');
  });

  it('should return 24px when rounded and lg are true', () => {
    const borderRadius = propsToBorderRadius(theme, true, false, true);
    expect(borderRadius).toBe('24px');
  });

  it('should return 5px when rounded is false', () => {
    const borderRadius = propsToBorderRadius(theme, false, false, false);
    expect(borderRadius).toBe('5px');
  });
});
