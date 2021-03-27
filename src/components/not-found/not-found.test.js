import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {getFakeStore} from '../../data-structure';
import NotFound from './not-found';

it(`Should NotFound render correctly`, () => {
  const store = getFakeStore();
  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <NotFound />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
});
