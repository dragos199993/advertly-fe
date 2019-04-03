import React, { FunctionComponent, ReactNode } from 'react';
import UsersPageContainer from '../../../core/userspage/UsersPageContainer/UsersPageContainer';
import { IUsersPageContainerState } from '../../../core/userspage/UsersPageContainer/IUsersPageContainer';
import { Link } from 'react-router-dom';
import { PROFILE } from '../../../../router/routePaths';
import { Card, H5, Tag } from '@blueprintjs/core';

export const UsersPage: FunctionComponent<IUsersPageContainerState> = ({ users }) => {
  return (
    <div className="container">
      <div className="row">
        { users.map(({ username, email, role, created, _id }, index) => (
          <div className="col-md-6" key={ index }>
            <Card>
              <H5>
                <Link to={ `${ PROFILE }/${ _id }` }>{ username }</Link>
              </H5>
              <p>
                User interfaces that enable people to interact smoothly with data, ask better questions, and
                make better decisions.
              </p>
              <Tag>{ created }</Tag>
            </Card>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export const UsersPageRender: ReactNode = (
  <UsersPageContainer>
    { (props) => <UsersPage { ...props } /> }
  </UsersPageContainer>
);
