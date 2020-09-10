import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Content from '~/theme/components/Content';
import { theme } from '~/theme';
import 'jest-styled-components';

describe('Content tests', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container } = render(<Content theme={theme} />);

    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('height', '100%');
    expect(container.firstChild).toHaveStyleRule('background-color', theme.colors.foreground);
    expect(container.firstChild).toHaveStyleRule('border-radius', theme.borderRadiuses.md);
    expect(container.firstChild).toHaveStyleRule('padding', `${theme.sizes.contentVerticalPadding} ${theme.sizes.contentHorizontalPadding}`);
  });
});
