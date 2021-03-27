import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {getFakeStore} from '../../data-structure';
import MovieCardAddToListButton from './movie-card-add-to-list-button';

it(`Should MovieCardAddToListButton render correctly`, () => {
  const history = createMemoryHistory();
  const store = getFakeStore();

  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MovieCardAddToListButton />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
