import React from 'react';
import { shallow, ShallowWrapper  } from 'enzyme';
import PageNotFound from '../../../../components/presentational/shared/PageNotFound/PageNotFound';

describe('PageNotFound', () => {
  let wrapper: ShallowWrapper<{}>;
  wrapper = shallow(<PageNotFound />);

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
