import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/trade/:currency" exact component={Trade} />
        <PrivateRoute path="/profile/:login" exact component={Profile} />
        <PrivateRoute path="/feeds" exact component={Feeds} />
        <PrivateRoute path="/stats" exact component={Stats} />
        <Redirect to="/trade/btc" />
      </Switch>
    );
  }
}

export default AppRouter;
