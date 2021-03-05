import React from 'react';
import LayoutRouter from '../layout-router/layout-router';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const App = () => (
  <Router history={browserHistory}>
    <LayoutRouter />
  </Router>
);

export default App;
