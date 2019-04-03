import React, { FunctionComponent, ReactElement } from 'react';
import { IRegisterPresentational } from '../../core/auth/IAuth';
import { Link } from 'react-router-dom';
import RegisterContainer from '../../core/auth/register/RegisterContainer';
import { Button, Classes, FormGroup, InputGroup } from '@blueprintjs/core';
import { LOGIN } from '../../../router/routePaths';

export const Register: FunctionComponent<IRegisterPresentational> = (props: IRegisterPresentational) => {
  const { submitForm, changeInput, state: { username, email, password, confirmPassword, errors, role } } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="mt-5 col-md-6 offset-md-3">
          {/*{ !errors.length ? null : errors.map((error, index) => (*/ }
          {/*  <Alert color="danger" key={ index }>*/ }
          {/*    <div>{ error.msg }</div>*/ }
          {/*  </Alert>*/ }
          {/*)) }*/ }
          <FormGroup
            label="Username"
            labelFor="username"
            labelInfo="(required)"
          >
            <InputGroup
              onChange={ changeInput }
              value={ username }
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
          </FormGroup>
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
          <FormGroup
            label="Confirm Password"
            labelFor="confirmPassword"
            labelInfo="(required)"
          >
            <InputGroup
              onChange={ changeInput }
              value={ confirmPassword }
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password" />
          </FormGroup>
          {/*<ControlGroup onChange={ changeInput } >*/ }
          {/*  <HTMLSelect options={['Customer', 'Company']}/>*/ }
          {/*</ControlGroup>*/ }
          <div className={ `${ Classes.LABEL } mb-2` }>You don't have an account? Create one <Link to={ LOGIN }>here</Link></div>
          <Button onClick={ submitForm } rightIcon="arrow-right" text="Register" />
        </div>
      </div>
    </div>
  );
};

export const RegisterRender: ReactElement = (
  <RegisterContainer>
    { (props) => <Register { ...props } /> }
  </RegisterContainer>
);
