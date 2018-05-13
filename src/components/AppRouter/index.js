import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Profile from '../Profile';
import Trade from '../Trade';
import Login from '../Login';
import Feeds from '../Feeds';
import Stats from '../Stats';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact component={Trade} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/trade" exact component={Trade} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/feeds" exact component={Feeds} />
        <PrivateRoute path="/stats" exact component={Stats} />
      </Switch>
    );
  }
}

export default AppRouter;
