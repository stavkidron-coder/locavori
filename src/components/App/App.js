import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

// import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import ProfilePage from '../UserProfile/UserProfile';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import UserRegisterPage from '../UserRegistration/UserRegisterPage/UserRegisterPage';
import RegisterOptions from '../RegisterOptions/RegisterOptions';
import MakerRegisterPage from '../MakerRegistration/MakerRegisterPage/MakerRegisterPage';
import NavbarCollapse from '../NavbarCollapse/NavbarCollapse';
import MakerPage from '../MakerProfile/MakerProfile';
import MakerRegistrationPgOne from '../MakerRegistration/MakerRegistrationFirstPage/MakerRegistrationUserInfoPage';

import './App.css';
import AdminPage from '../AdminPage/AdminPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <NavbarCollapse/>

          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows HomePage at all times (logged in or not)
              exact
              path="/home"
              component={HomePage}
            />

            <Route
              // shows HomePage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            />
            
            <Route
              // shows HomePage at all times (logged in or not)
              exact
              path="/register-options"
              component={RegisterOptions}
            />
            
            <Route
              // shows HomePage at all times (logged in or not)
              exact
              path="/maker-registration"
              component={MakerRegisterPage}
            />
            
            <Route
              // shows HomePage at all times (logged in or not)
              exact
              path="/maker-registration1"
              component={MakerRegistrationPgOne}
            />
            
            {/* NEEDS TO BE SECURED */}
            <Route
              // shows HomePage at all times (logged in or not)
              exact

              path="/adminPage"
              component={AdminPage}
            />


            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user*/}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/profile"
              component={ProfilePage}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/home"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/user-registration"
              component={UserRegisterPage}
              authRedirect="/home"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/makerCard/:id"
              component={MakerPage}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
