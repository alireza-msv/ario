import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Col from '~/theme/components/Col';
import Theme, { theme } from '~/theme';
import { breakpointToMediaString } from '~/theme/utils/responsive';
import Breakpoint from '~/types/theme/Breakpoint';
import 'jest-styled-components';

const colWidth = 100 / theme.grid.cols;

const calcWidth = (size: number) : string => (colWidth * size).toFixed(3);

describe('Col tests', () => {
  afterEach(cleanup);

  it('should have padding-right and padding-left', () => {
    const { container } = render(<Col />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('padding-right', theme.grid.gutter);
    expect(container.firstChild).toHaveStyleRule('padding-left', theme.grid.gutter);
  });

  it('should have flex-grow 1 when size is not supplied', () => {
    const { container } = render(<Col />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex-grow', '1');
    expect(container.firstChild).toHaveStyleRule('flex-basis', '0');
    expect(container.firstChild).toHaveStyleRule('max-width', '100%');
  });

  it('should have flex: 0 0 auto when xs is auto', () => {
    const { container } = render(<Col xs="auto" />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex', '0 0 auto');
    expect(container.firstChild).toHaveStyleRule('width', 'auto');
    expect(container.firstChild).toHaveStyleRule('max-width', '100%');
  });

  it('should throw error when size is negative', () => {
    const originalColsoleError = window.console.error;
    window.console.error = () => {
      // do nothing
    };

    const renderWithError = () => {
      render(<Col xs={-1} theme={theme} />);
    };

    expect(renderWithError).toThrow();
    window.console.error = originalColsoleError;
  });

  it('should throw error when size is greater than cols count', () => {
    const originalColsoleError = window.console.error;
    window.console.error = () => {
      // do nothing
    };

    const renderWithError = () => {
      render(<Col xs={theme.grid.cols + 1} theme={theme} />);
    };

    expect(renderWithError).toThrow();
    window.console.error = originalColsoleError;
  });

  it('should have flex: 0 0 8.333% when xs is 1', () => {
    const { container } = render(<Col xs={1} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(1)}%`);
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(1)}%`);
  });

  it('should have flex: 0 0 16.666% when xs is 2', () => {
    const { container } = render(<Col xs={2} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(2)}%`);
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(2)}%`);
  });

  it('should have flex: 0 0 50% when xs is 6', () => {
    const { container } = render(<Col xs={6} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(6)}%`);
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(6)}%`);
  });

  it('should have flex: 0 0 100% when xs is 12', () => {
    const { container } = render(<Col xs={12} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(12)}%`);
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(12)}%`);
  });

  it('should have flex: 0 0 auto when sm is auto', () => {
    const { container } = render(<Col sm="auto" />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex-basis', '0');
    expect(container.firstChild).toHaveStyleRule('flex-grow', '1');
    expect(container.firstChild).toHaveStyleRule('max-width', '100%');
    expect(container.firstChild).toHaveStyleRule('flex', '0 0 auto', {
      media: `(${breakpointToMediaString(Breakpoint.SM)})`,
    });
    expect(container.firstChild).toHaveStyleRule('max-width', '100%', {
      media: `(${breakpointToMediaString(Breakpoint.SM)})`,
    });
  });

  it('should have flex: 0 0 16.666% when sm is 2', () => {
    const { container } = render(<Col xs={6} sm={2} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(6)}%`);
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(6)}%`);
    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(2)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.SM)})`,
    });
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(2)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.SM)})`,
    });
  });

  it('should have proper style based on sizes', () => {
    const { container } = render(
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        xxl={1}
      />, { wrapper: Theme },
    );

    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(12)}%`);
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(12)}%`);
    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(6)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.SM)})`,
    });
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(6)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.SM)})`,
    });
    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(4)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.MD)})`,
    });
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(4)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.MD)})`,
    });
    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(3)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.LG)})`,
    });
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(3)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.LG)})`,
    });
    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(2)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.XL)})`,
    });
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(2)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.XL)})`,
    });
    expect(container.firstChild).toHaveStyleRule('flex', `0 0 ${calcWidth(1)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.XXL)})`,
    });
    expect(container.firstChild).toHaveStyleRule('max-width', `${calcWidth(1)}%`, {
      media: `(${breakpointToMediaString(Breakpoint.XXL)})`,
    });
  });
});
