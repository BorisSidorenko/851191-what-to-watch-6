import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {RoutePaths} from '../../utils/constatns';
import {addRequestedRouteAction} from '../../store/action';

const handleUserNotAuthtorized = () => {
  return <Redirect to={RoutePaths.SIGN_IN} />;
};

const PrivateRoute = ({render, ...rest}) => {
  const {location} = rest;
  const {isAuthtorized} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthtorized) {
      dispatch(addRequestedRouteAction(location.pathname));
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(routeProps) => (
        isAuthtorized ? render(routeProps) : handleUserNotAuthtorized()
      )}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired
};

export default PrivateRoute;
