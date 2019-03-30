import React, { FunctionComponent } from 'react';
import MainRoutes from '../../router/mainRouter';
import HeaderContainer from '../core/shared/HeaderContainer/HeaderContainer';
import Header from './shared/Header/Header';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <HeaderContainer>
        { (props) => <Header { ...props } /> }
      </HeaderContainer>
      <MainRoutes />
    </div>
  );
};

export default App;
