import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ListPageContainer from '../../../../../components/core/listpage/ListPageContainer/ListPageContainer';
import { ListPage } from '../../../../../components/presentational/listpage/ListPage/ListPage';

describe('ListPage', () => {
  let wrapper: ShallowWrapper<{}>;
  wrapper = shallow(
    <ListPageContainer>
      { () => <ListPage /> }
    </ListPageContainer>
  );
  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
