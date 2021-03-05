import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RoutePaths} from '../../utils/constatns';

const PrivateRoute = ({render, isAuthtorized}) => (
  <Route
    render={(routeProps) => (
      isAuthtorized ? render(routeProps) : <Redirect to={RoutePaths.SIGN_IN} />
    )}
  />
);

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  isAuthtorized: PropTypes.bool.isRequired
};

const mapStateToProps = ({isAuthtorized}) => ({isAuthtorized});

export default connect(mapStateToProps)(PrivateRoute);
