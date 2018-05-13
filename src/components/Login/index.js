import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { authRequest, getIsAuthorized, getAuthError } from '../../ducks/auth';
import { regRequest, getIsRegistered, getRegError } from '../../ducks/reg';

import Background from '../Background';
import {  Main,
  WrapMain,
  WrapCenter,
  CentrerPanel,
  LoginForm,
  LoginLogo,
  InputWrap,
  InputLoginIcon,
  Button,
} from '../StyledComponents';

import imgLogo from '../../assets/Logo.svg';
import imgUser from '../../assets/login/user-shape.svg';
import imgPassword from '../../assets/login/padlock-unlock.svg';

class Login extends PureComponent {
  state = {
    mode: 'login',
    email: '',
    password: '',
  };

  toggleMode = event => {
    event.preventDefault();
    console.log(event.target.name);
    this.setState({ mode: event.target.name === 'login' ? 'registration' : 'login' });
  };
  
  handleInputchange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = values => {
    const { mode } = this.state;
    console.log(values);
    if (mode === 'login') {
      this.props.authRequest(values);
    } else {
      this.props.regRequest(values);
    }
  };

  render() {
    const {isAuthorize} = this.props;
    const { mode } = this.state;

    if (isAuthorize) {
      return <Redirect to="/" />;
    } else {
      return  <Fragment>
      <Background / >
      <Main >
        <WrapMain >
      <WrapCenter>
        <LoginLogo src={imgLogo} alt="project logo" />
        <CentrerPanel>
          <LoginForm>
            <Form onSubmit={this.handleSubmit}
              render={({ handleSubmit }) => (
                <form 
                onSubmit={handleSubmit}
                >
                  <InputWrap>
                    <Field name="email" component="input" placeholder="email" type="email" />
                    <InputLoginIcon url={imgUser} />
                  </InputWrap>
                  <InputWrap>
                    <Field
                      name="password"
                      component="input"
                      placeholder="password"
                      type="password"
                    />
                    <InputLoginIcon url={imgPassword} />
                  </InputWrap>
                  <InputWrap>
                    <Button type="submit">
                      {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                  </InputWrap>
                </form>
              )}
            />
          </LoginForm>
        </CentrerPanel>
        <CentrerPanel>
          {mode === 'login' ? (
            <p>
              Впервые на сайте?{' '}
              <a href="" name="login" onClick={this.toggleMode}>
                Регистрация
              </a>
            </p>
          ) : (
            <p>
              Уже зарегистрированы?{' '}
              <a href="" name="registration" onClick={this.toggleMode}>
                Войти
              </a>
            </p>
          )}
        </CentrerPanel>
      </WrapCenter>
      </WrapMain> 
      </Main >
      
      </Fragment>
        }
    
  }
}

export default connect(
  state => ({
    isAuthorize: getIsAuthorized(state),
    loginError: getAuthError(state),
    isRegister: getIsRegistered(state),
    regError: getRegError(state),
  }),
  { authRequest, regRequest },
)(Login);
