import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  beauSecretBtn = () => {
    this.setState({
      username: 'beau@gmail.com',
      password: 'asdf1234',
    })
  }
  
  stavSecretBtn = () => {
    this.setState({
      username: 'kidronstav@gmail.com',
      password: 'asdf1234',
    })
  }

  render() {
    return (
      <Form className="formPanel loginForm" onSubmit={this.login}>
        <h2 onClick={this.beauSecretBtn}>Login</h2>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        
        <FormGroup>
          <Label htmlFor="email" onClick={this.stavSecretBtn}>
            Email:
            <Input
              type="text"
              name="email"
              required
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </Label>
          <Label htmlFor="password">
            Password:
            <Input
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </Label>
          </FormGroup>

          <Button
            onClick={this.login}
            className="loginBtns">
            Log In
          </Button>

          <Button
            className="registerBtn"
            onClick={() => {this.props.history.push('/register-options')}}
          >
            Register
          </Button>
      </Form>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(LoginForm));
