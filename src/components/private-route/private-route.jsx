import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RoutePaths} from '../../utils/constatns';
import {ActionCreator} from '../../store/action';
import {checkAuth} from '../../api/api-actions';
import AuthCheck from '../auth-check/auth-check';

const handleUserNotAuthtorized = ({location}, onPrivateRouteRequest) => {
  onPrivateRouteRequest(location.pathname);
  return <Redirect to={RoutePaths.SIGN_IN} />;
};

const PrivateRoute = ({render, isAuthtorized, onAuthCheck, onPrivateRouteRequest}) => {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (isChecking) {
      onAuthCheck();
    }

    return () => setIsChecking(false);
  }, [isAuthtorized]);


  if (!isAuthtorized && isChecking) {
    return <AuthCheck />;
  }

  return (
    <Route
      render={(routeProps) => (
        isAuthtorized ? render(routeProps) : handleUserNotAuthtorized(routeProps, onPrivateRouteRequest)
      )}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  onAuthCheck: PropTypes.func.isRequired,
  onPrivateRouteRequest: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  isAuthtorized: PropTypes.bool
};

const mapStateToProps = ({isAuthtorized}) => ({isAuthtorized});

const mapDispatchToProps = (dispatch) => ({
  onAuthCheck() {
    dispatch(checkAuth());
  },
  onPrivateRouteRequest(route) {
    dispatch(ActionCreator.addRequestedRoute(route));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
