import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ListPage } from '../../../../../components/presentational/listpage/ListPage/ListPage';

describe('ListPage', () => {
  let wrapper: ShallowWrapper<{}>;
  wrapper = shallow(<ListPage />);
  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
