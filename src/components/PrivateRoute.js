import React, { Component } from 'react';
import './stylesheets/NavBar.css';
import { Redirect, Route } from 'react-router-dom';


export default class PrivateRoute extends Component {
  render() {
    const { auth, component: Component, ...rest } = this.props;

    const renderRoute = (props) => {
      if (auth.authenticated) {
        return (
          <Component {...props} />
        );
      }

      const to = {
        pathname: '/login',
        state: { referrer: props.location.pathname },
      };

      return (
        <Redirect to={to} />
      );
    };

    return (
      <Route {...rest} render={renderRoute} />
    );
  }
}
