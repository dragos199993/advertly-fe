import React, { FunctionComponent, ReactElement } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col, Alert } from 'reactstrap';
import { IRegisterPresentational } from '../../core/auth/IAuth';
import { Link } from 'react-router-dom';
import RegisterContainer from '../../core/auth/register/RegisterContainer';

export const Register: FunctionComponent<IRegisterPresentational> = (props: IRegisterPresentational) => {
  const { submitForm, changeInput, state: { username, email, password, confirmPassword, errors, role } } = props;
  return (
    <Row>
      <Col className="mt-5" md={ { size: 6, offset: 3 } }>
        {/*{ !errors.length ? null : errors.map((error, index) => (*/ }
        {/*  <Alert color="danger" key={ index }>*/ }
        {/*    <div>{ error.msg }</div>*/ }
        {/*  </Alert>*/ }
        {/*)) }*/ }
        <Form onSubmit={ submitForm }>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter a username"
              value={ username }
              onChange={ changeInput }
            />
          </FormGroup>
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
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={ confirmPassword }
              onChange={ changeInput }
            />
          </FormGroup>
          <FormGroup>
            <Label for="role">User type</Label>
            <Input
              value={ role }
              onChange={ changeInput }
              type="select"
              name="role"
              id="role"
            >
              <option value="customer">Customer</option>
              <option value="company">Company</option>
            </Input>
          </FormGroup>
          <div>You don't have an account? Create one <Link to="/login">here</Link></div>
          <Button>Register</Button>
        </Form>
      </Col>
    </Row>
  );
};

export const RegisterRender: ReactElement = (
  <RegisterContainer>
    { (props) => <Register { ...props } /> }
  </RegisterContainer>
);
