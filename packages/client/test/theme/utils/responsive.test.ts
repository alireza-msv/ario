import { css } from 'styled-components';
import { respondTo, breakpointToMediaString } from '~/theme/utils/responsive';
import Breakpoint from '~/types/theme/Breakpoint';
import { theme } from '~/theme';

describe('breakpointToMediaString tests', () => {
  it('should create proper media string for SM breakpoint', () => {
    const media = breakpointToMediaString(Breakpoint.SM);
    expect(media).toBe(`min-width: ${theme.breakpoints.sm}`);
  });

  it('should create proper media string for MD breakpoint', () => {
    const media = breakpointToMediaString(Breakpoint.MD);
    expect(media).toBe(`min-width: ${theme.breakpoints.md}`);
  });

  it('should create proper media string for LG breakpoint', () => {
    const media = breakpointToMediaString(Breakpoint.LG);
    expect(media).toBe(`min-width: ${theme.breakpoints.lg}`);
  });

  it('should create proper media string for XL breakpoint', () => {
    const media = breakpointToMediaString(Breakpoint.XL);
    expect(media).toBe(`min-width: ${theme.breakpoints.xl}`);
  });

  it('should create proper media string for XXL breakpoint', () => {
    const media = breakpointToMediaString(Breakpoint.XXL);
    expect(media).toBe(`min-width: ${theme.breakpoints.xxl}`);
  });
});

describe('respondTo tests', () => {
  it('should create mediaQuery for SM breakpoint', () => {
    const wrapper = respondTo(Breakpoint.SM, css`background-color: red;`);
    expect(wrapper).toMatchSnapshot();
  });

  it('should create mediaQuery for MD breakpoint', () => {
    const wrapper = respondTo(Breakpoint.MD, css`background-color: yellow;`);
    expect(wrapper).toMatchSnapshot();
  });

  it('should create mediaQuery for LG breakpoint', () => {
    const wrapper = respondTo(Breakpoint.LG, css`background-color: pink;`);
    expect(wrapper).toMatchSnapshot();
  });

  it('should create mediaQuery for XL breakpoint', () => {
    const wrapper = respondTo(Breakpoint.XL, css`background-color: aqua;`);
    expect(wrapper).toMatchSnapshot();
  });

  it('should create mediaQuery for XXL breakpoint', () => {
    const wrapper = respondTo(Breakpoint.XXL, css`background-color: purple;`);
    expect(wrapper).toMatchSnapshot();
  });
});
