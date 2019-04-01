import React, { FunctionComponent, ReactNode } from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col, Badge, Button } from 'reactstrap';
import UsersPageContainer from '../../../core/userspage/UsersPageContainer/UsersPageContainer';
import { IUsersPageContainerState } from '../../../core/userspage/UsersPageContainer/IUsersPageContainer';
import { Link } from 'react-router-dom';
import { PROFILE } from '../../../../router/routePaths';

export const UsersPage: FunctionComponent<IUsersPageContainerState> = ({ users }) => {
  return (
    <Container>
      <Row>
        { users.map(({ username, email, role, created, _id }, index) => (
          <Col md="6" key={ index }>
            <Card>
              <CardBody>
                <Badge color="dark">{ created }</Badge>
                <CardTitle className="display-inline">
                  <Badge color="secondary">{ role }</Badge>
                  { username }
                </CardTitle>
                <CardText>{ email }</CardText>
                <Link to={ `${ PROFILE }/${ _id }` }><Button>View profile</Button></Link>
              </CardBody>
            </Card>
          </Col>
        ))
        }
      </Row>
    </Container>
  );
};

export const UsersPageRender: ReactNode = (
  <UsersPageContainer>
    { (props) => <UsersPage { ...props } /> }
  </UsersPageContainer>
);
