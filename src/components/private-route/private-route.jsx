import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {RoutePaths} from '../../utils/constatns';
import {addRequestedRouteAction} from '../../store/action';

const handleUserNotAuthtorized = ({location}, onPrivateRouteRequest) => {
  onPrivateRouteRequest(location.pathname);
  return <Redirect to={RoutePaths.SIGN_IN} />;
};

const PrivateRoute = ({render, ...rest}) => {
  const {isAuthtorized} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const onPrivateRouteRequest = (route) => {
    dispatch(addRequestedRouteAction(route));
  };

  return (
    <Route
      {...rest}
      render={(routeProps) => (
        isAuthtorized ? render(routeProps) : handleUserNotAuthtorized(routeProps, onPrivateRouteRequest)
      )}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired
};

export default PrivateRoute;
