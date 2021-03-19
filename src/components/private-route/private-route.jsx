import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RoutePaths} from '../../utils/constatns';
import {addRequestedRouteAction} from '../../store/action';
import {getIsAuthtorizedFlag} from '../../store/user/selectors';

const handleUserNotAuthtorized = ({location}, onPrivateRouteRequest) => {
  onPrivateRouteRequest(location.pathname);
  return <Redirect to={RoutePaths.SIGN_IN} />;
};

const PrivateRoute = ({render, isAuthtorized, onPrivateRouteRequest, ...rest}) => (
  <Route
    {...rest}
    render={(routeProps) => (
      isAuthtorized ? render(routeProps) : handleUserNotAuthtorized(routeProps, onPrivateRouteRequest)
    )}
  />
);

PrivateRoute.propTypes = {
  onPrivateRouteRequest: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  isAuthtorized: PropTypes.bool
};

const mapStateToProps = (state) => ({isAuthtorized: getIsAuthtorizedFlag(state)});

const mapDispatchToProps = (dispatch) => ({
  onPrivateRouteRequest(route) {
    dispatch(addRequestedRouteAction(route));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
