import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import '../UserRegistration.css';
import { Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthDate: this.state.birthDate,
        email: this.state.email,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Form className="formPanel userRegisterForm">
        <h2>Register as User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}

        <FormGroup>
          <Label htmlFor="firstName">
            First Name:
            <Input
              className="userRegisterInput"
              type="text"
              name="firstName"
              value={this.state.firstName}
              required
              onChange={this.handleInputChangeFor('firstName')}
            />
          </Label>
          <Label htmlFor="lastName">
            Last Name:
            <Input
              className="userRegisterInput"
              type="text"
              name="lastName"
              value={this.state.lastName}
              required
              onChange={this.handleInputChangeFor('lastName')}
            />
          </Label>
          <Label htmlFor="birthDate">
            Birth Date:
            <Input
              className="userRegisterInput"
              type="date"
              name="birthDate"
              value={this.state.birthDate}
              required
              onChange={this.handleInputChangeFor('birthDate')}
            />
          </Label>
          <Label htmlFor="email">
            Email:
            <Input
              className="userRegisterInput"
              type="email"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleInputChangeFor('email')}
            />
          </Label>
          <Label htmlFor="password">
            Password:
            <Input
              className="userRegisterInput"
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </Label>
        </FormGroup>

          <Button
            onClick={this.registerUser}
            color="success">
              Register
          </Button>

          <Button
          color="link"
            onClick={() => {
              this.props.history.push('/login');
            }}
          >
            Login
          </Button>

      </Form>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterForm));
