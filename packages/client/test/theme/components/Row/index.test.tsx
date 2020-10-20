// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Row from '~/theme/components/Row';
import Theme, { theme } from '~/theme';
import FlexDirection from '~/types/theme/FlexDirection';
import AlignItems from '~/types/theme/FlexAlignItems';
import JustifyContent from '~/types/theme/FlexJustifyContent';
import 'jest-styled-components';

describe('Row tests', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container } = render(<Row />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('margin-right', `-${theme.grid.gutter}`);
    expect(container.firstChild).toHaveStyleRule('margin-left', `-${theme.grid.gutter}`);
  });

  it('should have flex-direction row', () => {
    const { container } = render(<Row direction={FlexDirection.Row} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
  });

  it('should have flex-direction row-reverse', () => {
    const { container } = render(<Row direction={FlexDirection.RowReverse} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row-reverse');
  });

  it('should have flex-direction column', () => {
    const { container } = render(<Row direction={FlexDirection.Column} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
  });

  it('should have flex-direction column-reverse', () => {
    const { container } = render(<Row direction={FlexDirection.ColumnReverse} />, {
      wrapper: Theme,
    });

    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column-reverse');
  });

  it('should have flex-wrap: nowrap', () => {
    const { container } = render(<Row noWrap />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'nowrap');
  });

  it('should have flex-wrap: wrap', () => {
    const { container } = render(<Row noWrap={false} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
  });

  it('should have margins to 0 with noGutter', () => {
    const { container } = render(<Row noGutters />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('margin-right', '0');
    expect(container.firstChild).toHaveStyleRule('margin-left', '0');
  });

  it('should have align-items: center', () => {
    const { container } = render(<Row alignItems={AlignItems.Center} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
  });

  it('should have align-items: flex-start', () => {
    const { container } = render(<Row alignItems={AlignItems.Start} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
  });

  it('should have align-items: flex-end', () => {
    const { container } = render(<Row alignItems={AlignItems.End} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-end');
  });

  it('should have align-items: baseline', () => {
    const { container } = render(<Row alignItems={AlignItems.Baseline} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('align-items', 'baseline');
  });

  it('should have justify-content: flex-start', () => {
    const { container } = render(<Row justifyContent={JustifyContent.Start} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('justify-content', 'flex-start');
  });

  it('should have justify-content: flex-end', () => {
    const { container } = render(<Row justifyContent={JustifyContent.End} />, { wrapper: Theme });

    expect(container.firstChild).toHaveStyleRule('justify-content', 'flex-end');
  });

  it('should have justify-content: center', () => {
    const { container } = render(<Row justifyContent={JustifyContent.Center} />, {
      wrapper: Theme,
    });

    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
  });

  it('should have justify-content: space-between', () => {
    const { container } = render(<Row justifyContent={JustifyContent.SpaceBetween} />, {
      wrapper: Theme,
    });

    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between');
  });

  it('should have justify-content: space-around', () => {
    const { container } = render(<Row justifyContent={JustifyContent.SpaceAround} />, {
      wrapper: Theme,
    });

    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-around');
  });

  // it('should reset Col padding when noGutters is true', async () => {
  //   const { container } = render(
  //     <Row noGutters>
  //       <Col data-testid="col" />
  //     </Row>,
  //     { wrapper: Theme },
  //   );

  //   const col = await findByTestId(container, 'col');
  //   expect(col).toHaveStyleRule('padding-right', 0, {
  //     modifier: ' div',
  //   });
  // });
});
