import React, { FunctionComponent, ReactNode } from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col, Badge, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { USERS } from '../../../../router/routePaths';
import { IUserDetailContainerState } from '../../../core/userspage/UserDetailContainer/IUserDetailContainer';
import UserDetailContainer from '../../../core/userspage/UserDetailContainer/UserDetailContainer';

export const UserDetail: FunctionComponent<IUserDetailContainerState> = ({ user }) => {
  const { username, email, role, created, _id } = user;
  return (
    <Container>
      <Row>
          <Col>
            <Card>
              <CardBody>
                <Badge color="dark">{ created }</Badge>
                <Link to={ USERS }><Button>Go back</Button></Link>
                <CardTitle className="display-inline">
                  <Badge color="secondary">{ role }</Badge>
                  { username }
                </CardTitle>
                <CardText>{ email }</CardText>
              </CardBody>
            </Card>
          </Col>
      </Row>
    </Container>
  );
};

export const UserDetailRender: ReactNode = (
  <UserDetailContainer>
    { (props) => <UserDetail { ...props } /> }
  </UserDetailContainer>
);
