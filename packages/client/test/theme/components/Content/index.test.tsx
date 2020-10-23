import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Content from '~/theme/components/Content';
import Theme, { theme } from '~/theme';
import PaddingSize from '~/types/theme/PaddingSize';
import 'jest-styled-components';

const renderContent = (props = {}) => render(<Content {...props} />, { wrapper: Theme });

describe('Content tests', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container } = renderContent();

    expect(container.firstChild).toHaveStyleRule('background-color', theme.colors.foreground);
    expect(container.firstChild).toHaveStyleRule('border-radius', theme.borderRadiuses.md);
    expect(container.firstChild).toHaveStyleRule('padding', `${theme.paddings.md}`);
  });

  it('should have `padding: 0 0` when padding is None', () => {
    const { container } = renderContent({ padding: PaddingSize.None });

    expect(container.firstChild).toHaveStyleRule('padding', theme.paddings.none);
  });

  it('should have `padding: 8px 8px` when padding is SM', () => {
    const { container } = renderContent({ padding: PaddingSize.SM });

    expect(container.firstChild).toHaveStyleRule('padding', theme.paddings.sm);
  });

  it('should set verticalPadding when both padding and verticalPadding are applied', () => {
    const { container } = renderContent({
      padding: PaddingSize.SM,
      verticalPadding: PaddingSize.LG,
    });

    expect(container.firstChild).toHaveStyleRule('padding', `${theme.paddings.lg} ${theme.paddings.sm}`);
  });

  it('should set horizontalPadding when both padding and horizontalPadding are applied', () => {
    const { container } = renderContent({
      padding: PaddingSize.SM,
      horizontalPadding: PaddingSize.LG,
    });

    expect(container.firstChild).toHaveStyleRule('padding', `${theme.paddings.sm} ${theme.paddings.lg}`);
  });
});
