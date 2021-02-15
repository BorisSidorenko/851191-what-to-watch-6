import React from 'react';
import LayoutRouter from '../layout-router/layout-router';
import {BrowserRouter} from 'react-router-dom';

const App = (props) => (
  <BrowserRouter>
    <LayoutRouter {...props} />
  </BrowserRouter>
);

export default App;
