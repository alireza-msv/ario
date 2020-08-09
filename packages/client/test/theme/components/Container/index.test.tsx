import * as React from 'react';
import { render } from '@testing-library/react';
import { theme } from '~/theme';
import Container from '~/theme/components/Container';
import 'jest-styled-components';

describe('Container test', () => {
  it('should have style rules', () => {
    const { container } = render(<Container theme={theme} />);
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('padding-right', theme.sizes.layoutHorizontalPadding);
    expect(container.firstChild).toHaveStyleRule('margin-right', 'auto');
    expect(container.firstChild).toHaveStyleRule('margin-left', 'auto');
    expect(container.firstChild).toHaveStyleRule('width', '540px', {
      media: `(min-width: ${theme.breakpoints.sm})`,
    });
    expect(container.firstChild).toHaveStyleRule('width', '720px', {
      media: `(min-width: ${theme.breakpoints.md})`,
    });
    expect(container.firstChild).toHaveStyleRule('width', '960px', {
      media: `(min-width: ${theme.breakpoints.lg})`,
    });
    expect(container.firstChild).toHaveStyleRule('width', '1140px', {
      media: `(min-width: ${theme.breakpoints.xl})`,
    });
    expect(container.firstChild).toHaveStyleRule('width', '1500px', {
      media: `(min-width: ${theme.breakpoints.xxl})`,
    });
  });
});
