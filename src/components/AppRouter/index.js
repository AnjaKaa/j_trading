import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Profile from '../Profile';
import Login from '../Login';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact component={Profile} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/profile" exact component={Profile} />
      </Switch>
    );
  }
}

export default AppRouter;
