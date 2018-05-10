import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { getIsAuthorized } from '../../ducks/auth';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;

    return !isAuthorized ? <Redirect to="/login" /> : <Route {...this.props} />;
  }
}

export default connect(state => ({
  isAuthorized: getIsAuthorized(state),
}))(PrivateRoute);
