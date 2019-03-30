import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HeaderContainer from '../../../../components/core/shared/HeaderContainer/HeaderContainer';
import Header from '../../../../components/presentational/shared/Header/Header';
import {
  IHeaderContainerProps,
  IHeaderContainerState
} from '../../../../components/core/shared/HeaderContainer/IHeaderContainerProps';

describe('HeaderContainer', () => {
  let wrapperContainer: ShallowWrapper<IHeaderContainerProps, IHeaderContainerState>;
  wrapperContainer = shallow<IHeaderContainerProps, IHeaderContainerState>(
    <HeaderContainer>
      { (props) => <Header { ...props } /> }
    </HeaderContainer>
  );

  test('renders without crashing', () => {
    expect(wrapperContainer).toMatchSnapshot();
  });
});
