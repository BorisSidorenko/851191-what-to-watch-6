import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RoutePaths} from '../../utils/constatns';
import {ActionCreator} from '../../store/action';

const handleUserNotAuthtorized = (route, onPrivateRouteRequest) => {
  onPrivateRouteRequest(route);
  return <Redirect to={RoutePaths.SIGN_IN} />;
};

const PrivateRoute = ({render, isAuthtorized, path, onPrivateRouteRequest}) => (
  <Route
    render={(routeProps) => (
      isAuthtorized ? render(routeProps) : handleUserNotAuthtorized(path, onPrivateRouteRequest)
    )}
  />
);

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  onPrivateRouteRequest: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  isAuthtorized: PropTypes.bool.isRequired
};

const mapStateToProps = ({isAuthtorized}) => ({isAuthtorized});

const mapDispatchToProps = (dispatch) => ({
  onPrivateRouteRequest(route) {
    dispatch(ActionCreator.addRequestedRoute(route));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
