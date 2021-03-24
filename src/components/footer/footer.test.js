import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from './footer';

it(`Should Footer render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <Footer />
      </Router>
  );

  expect(container.querySelector(`.page-footer`)).toBeInTheDocument();
  expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
});
