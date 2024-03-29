import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../../../components/presentational/App';

describe('App', () => {
  let wrapper: ShallowWrapper<{}>;
  wrapper = shallow(<App />);
  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
