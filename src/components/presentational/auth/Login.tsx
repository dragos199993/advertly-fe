import React, { FunctionComponent, ReactElement } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col, Alert } from 'reactstrap';
import { ILoginPresentational } from '../../core/auth/IAuth';
import { Link } from 'react-router-dom';
import LoginContainer from '../../core/auth/login/LoginContainer';

export const Login: FunctionComponent<ILoginPresentational> = (props: ILoginPresentational) => {
  const { submitForm, changeInput, state: { email, password, errors } } = props;
  return (
    <Row>
      <Col className="mt-5" md={ { size: 6, offset: 3 } }>
        { errors && Object.values(errors).map((error, index) => (
          <Alert color="danger" key={ index }>
            <div>{ error }</div>
          </Alert>
        )) }
        <Form onSubmit={ submitForm }>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={ email }
              onChange={ changeInput }
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={ password }
              onChange={ changeInput }
            />
          </FormGroup>
          <div>You don't have an account? Create one <Link to="/register">here</Link></div>
          <Button>Login</Button>
        </Form>
      </Col>
    </Row>
  );
};

export const LoginRender: ReactElement = (
  <LoginContainer>
    { (props) => <Login { ...props } /> }
  </LoginContainer>
);
