import React, { FunctionComponent, ReactNode } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IProfilePageContainerState } from '../../../core/userspage/ProfilePageContainer/IProfilePageContainer';
import ProfilePageContainer from '../../../core/userspage/ProfilePageContainer/ProilePageContainer';

export const ProfilePage: FunctionComponent<IProfilePageContainerState> = ({ user }) => {
  const { username, email, role } = user;
  return (
    <Container>
      <Row>
        <Col md="6">
          <h3>Welcome, { username }</h3>
        </Col>
      </Row>
    </Container>
  );
};

export const ProfilePageRender: ReactNode = (
  <ProfilePageContainer>
    { (props) => <ProfilePage { ...props } /> }
  </ProfilePageContainer>
);
