import React from 'react';
import LayoutRouter from '../layout-router/layout-router';
import {BrowserRouter} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <LayoutRouter />
  </BrowserRouter>
);

export default App;
