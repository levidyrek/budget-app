import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import './App.css';
import Budget from './containers/Budget';
import LoginPage from './containers/LoginPage';
import PrivateRoute from './containers/PrivateRoute';
import ErrorDialog from './containers/ErrorDialog';


export default function App() {
  return (
    <Router>
      <div className="full-height">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/budget" component={Budget} />
          <Redirect to="/budget" />
        </Switch>
        <ErrorDialog />
      </div>
    </Router>
  );
}
