import { css } from 'styled-components';
import respondTo from '~/theme/utils/respondTo';
import Breakpoint from '~/types/theme/Breakpoint';

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
