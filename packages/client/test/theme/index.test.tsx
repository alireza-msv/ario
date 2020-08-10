import * as React from 'react';
import { shallow } from 'enzyme';
import Theme from '~/theme';

describe('Theme tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<Theme><div>TEST</div></Theme>);
    expect(tree).toMatchSnapshot();
  });
});
