import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import theme from '~/theme/theme.ts';
import GlobalStyles from '~/theme/components/GlobalStyles';
import 'jest-styled-components';

describe('GlobalStyles tests', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    render(
      <GlobalStyles theme={theme} />,
    );
    expect(document.head).toMatchSnapshot();
  });
});
