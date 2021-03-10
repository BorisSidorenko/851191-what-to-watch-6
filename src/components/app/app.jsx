import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import LayoutRouter from '../layout-router/layout-router';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {checkAuth} from '../../api/api-actions';
import {connect} from 'react-redux';
import AuthCheck from '../auth-check/auth-check';

const App = ({isAuthtorized, onLoad}) => {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (isChecking) {
      onLoad();
    }

    return () => setIsChecking(false);
  }, [isAuthtorized]);


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
  onLoad: PropTypes.func.isRequired
};

const mapStateToProps = ({isAuthtorized}) => ({isAuthtorized});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(checkAuth());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
