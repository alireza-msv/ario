// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { render } from '@testing-library/react';
import Theme, { theme } from '~/theme';
import Container from '~/theme/components/Container';
import { breakpointToMediaString } from '~/theme/utils/responsive';
import Breakpoint from '~/types/theme/Breakpoint';
import 'jest-styled-components';

describe('Container test', () => {
  it('should have style rules', () => {
    const { container } = render(<Container />, { wrapper: Theme });
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('padding-right', theme.sizes.layoutHorizontalPadding);
    expect(container.firstChild).toHaveStyleRule('margin-right', 'auto');
    expect(container.firstChild).toHaveStyleRule('margin-left', 'auto');
    expect(container.firstChild).toHaveStyleRule('width', '540px', {
      media: `(${breakpointToMediaString(Breakpoint.SM)})`,
    });
    expect(container.firstChild).toHaveStyleRule('width', '720px', {
      media: `(${breakpointToMediaString(Breakpoint.MD)})`,
    });
    expect(container.firstChild).toHaveStyleRule('width', '960px', {
      media: `(${breakpointToMediaString(Breakpoint.LG)})`,
    });
    expect(container.firstChild).toHaveStyleRule('width', '1140px', {
      media: `(${breakpointToMediaString(Breakpoint.XL)})`,
    });
    expect(container.firstChild).toHaveStyleRule('width', '1500px', {
      media: `(${breakpointToMediaString(Breakpoint.XXL)})`,
    });
  });
});
