import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routePaths } from './routePaths';
import PageNotFound from '../components/presentational/shared/PageNotFound/PageNotFound';
import { ListPageRender } from '../components/presentational/listpage/ListPage/ListPage';

const MainRoutes: FunctionComponent = () => {
  const {
    root,
    pageNotFound,
    allRoutes
  } = routePaths;

  return (
    <Switch>
      <Route exact={ true } path={ root } render={ () => ListPageRender } />
      <Route exact={ true } path={ pageNotFound } component={ PageNotFound }/>
      <Redirect from={ allRoutes } to={ pageNotFound }/>
    </Switch>
  );
};

export default MainRoutes;
