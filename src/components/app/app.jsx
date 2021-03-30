import React, {useState, useEffect} from 'react';
import LayoutRouter from '../layout-router/layout-router';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {checkAuth} from '../../api/api-actions';
import {requireAuthorizationAction, loginAction} from '../../store/user/action';
import {useSelector, useDispatch} from 'react-redux';
import AuthCheck from '../auth-check/auth-check';
import {AuthorizationStatus} from '../../utils/constatns';


const App = () => {
  const {isAuthtorized} = useSelector((state) => state.USER);
  const [isChecking, setIsChecking] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isChecking) {
      dispatch(checkAuth())
        .then(({data}) => dispatch(loginAction(data)))
        .then(() => dispatch(requireAuthorizationAction(AuthorizationStatus.AUTHORIZED)))
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

export default App;
