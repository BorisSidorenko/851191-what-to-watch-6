import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, authInfoStructure} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import Main from './main';
import {createAPI} from '../../api/api';
import rootReducer from '../../store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../utils/constatns';

const api = createAPI({});
const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
  preloadedState: {
    DATA: {
      selectedMovie: movieStructure,
      isPromoLoaded: true,
      movies: [movieStructure]
    },
    USER: {
      isAuthtorized: AuthorizationStatus.AUTHORIZED,
      user: authInfoStructure
    }
  }
});

it(`Should Main render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  const {container} = render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <Main />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`WTW`)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
  expect(screen.getByText(`Play`)).toBeInTheDocument();
  expect(screen.getByText(`My list`)).toBeInTheDocument();
  expect(container.querySelector(`.catalog`)).toBeInTheDocument();
  expect(screen.getByText(`Catalog`)).toBeInTheDocument();
  expect(container.querySelector(`.copyright`)).toBeInTheDocument();
});
