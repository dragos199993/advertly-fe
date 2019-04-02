import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROOT, ALL_ROUTES, PAGE_NOT_FOUND, LOGIN, REGISTER, USERS, PROFILE } from './routePaths';
import PageNotFound from '../components/presentational/shared/PageNotFound/PageNotFound';
import { ListPageRender } from '../components/presentational/listpage/ListPage/ListPage';
import { RegisterRender } from '../components/presentational/auth/Register';
import { LoginRender } from '../components/presentational/auth/Login';
import { UsersPageRender } from '../components/presentational/userspage/UsersPage/UsersPage';
import { UserDetailRender } from '../components/presentational/userspage/UserDetail/UserDetail';
import { ProfilePageRender } from '../components/presentational/userspage/ProfilePage/ProfilePage';

const MainRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact={ true } path={ ROOT } render={ () => ListPageRender } />
      <Route exact={ true } path={ USERS } render={ () => UsersPageRender } />
      <Route exact={ true } path={ `${ PROFILE }/:id` } render={ () => UserDetailRender } />
      <Route exact={ true } path={ `${ PROFILE }` } render={ () => ProfilePageRender } />

      <Route exact={ true } path={ LOGIN } component={ () => LoginRender } />
      <Route exact={ true } path={ REGISTER } component={ () => RegisterRender } />

      <Route exact={ true } path={ PAGE_NOT_FOUND } component={ PageNotFound } />
      <Redirect from={ ALL_ROUTES } to={ PAGE_NOT_FOUND } />
    </Switch>
  );
};

export default MainRoutes;
