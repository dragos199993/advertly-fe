import React, { FunctionComponent, ReactElement } from 'react';
import { ILoginPresentational } from '../../core/auth/IAuth';
import { Link } from 'react-router-dom';
import LoginContainer from '../../core/auth/login/LoginContainer';
import { Button, Callout, Classes, FormGroup, InputGroup } from '@blueprintjs/core';
import { REGISTER } from '../../../router/routePaths';

export const Login: FunctionComponent<ILoginPresentational> = (props: ILoginPresentational) => {
  const { submitForm, changeInput, state: { email, password, errors } } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="mt-5 col-md-6 offset-md-3">
          { errors && Object.values(errors).map((error, index) => (
            <Callout className="mb-3" intent="danger" key={ index }>
              { error }
            </Callout>
          )) }
          <FormGroup
            label="Email"
            labelFor="email"
            labelInfo="(required)"
          >
            <InputGroup
              onChange={ changeInput }
              value={ email }
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
          </FormGroup>
          <FormGroup
            label="Password"
            labelFor="password"
            labelInfo="(required)"
          >
            <InputGroup
              onChange={ changeInput }
              value={ password }
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password" />
          </FormGroup>
          <div className={ `${ Classes.LABEL } mb-2` }>You don't have an account? Create one
            <Link to={ REGISTER }> here</Link>
          </div>
          <Button onClick={ submitForm } rightIcon="arrow-right" text="Log in" />
        </div>
      </div>
    </div>
  );
};

export const LoginRender: ReactElement = (
  <LoginContainer>
    { (props) => <Login { ...props } /> }
  </LoginContainer>
);
