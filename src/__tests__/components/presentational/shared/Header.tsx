import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header from '../../../../components/presentational/shared/Header/Header';

describe('Header', () => {
  let wrapper: ShallowWrapper<{}>;
  wrapper = shallow(<Header isNavbarOpen={ true } toggleNavbarMenu={ () => jest.fn() } />);

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
