import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Theme from '~/theme';
import GlobalStyles from '~/theme/components/GlobalStyles';
import 'jest-styled-components';

describe('GlobalStyles tests', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    render(<GlobalStyles />, { wrapper: Theme });
    expect(document.head).toMatchSnapshot();
  });
});
