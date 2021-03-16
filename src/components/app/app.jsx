import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import LayoutRouter from '../layout-router/layout-router';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {checkAuth} from '../../api/api-actions';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import AuthCheck from '../auth-check/auth-check';
import {AuthorizationStatus} from '../../utils/constatns';
import {getIsAuthtorizedFlag} from '../../store/user/selectors';


const App = ({isAuthtorized, onLoad, login, requireAuthorization}) => {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (isChecking) {
      onLoad()
        .then(({data}) => login(data))
        .then(() => requireAuthorization())
        .catch(() => setIsChecking(false));
    }
  }, []);

  if (!isAuthtorized && isChecking) {
    return <AuthCheck />;
  }

  return (
    <Router history={browserHistory}>
      <LayoutRouter />
    </Router>
  );
};

App.propTypes = {
  isAuthtorized: PropTypes.bool,
  onLoad: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  requireAuthorization: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({isAuthtorized: getIsAuthtorizedFlag(state)});

const mapDispatchToProps = (dispatch) => ({
  onLoad(onCheckComplete) {
    return dispatch(checkAuth(onCheckComplete));
  },
  login(data) {
    dispatch(ActionCreator.login(data));
  },
  requireAuthorization() {
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
