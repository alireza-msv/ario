import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
// import { shallow } from 'enzyme';
import Roboto from '~/theme/fonts/Roboto';

describe('Roboto font tests', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = render(<Roboto />);
    expect(container.parentNode).toMatchSnapshot();
  });
});
