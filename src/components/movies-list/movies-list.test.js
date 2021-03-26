import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, authInfoStructure} from '../../data-structure';
import {AMOUNT_OF_SIMILAR_MOVIES} from '../../utils/constatns';
import MoviesList from './movies-list';
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
      movies: [movieStructure]
    },
    USER: {
      isAuthtorized: AuthorizationStatus.AUTHORIZED,
      user: authInfoStructure
    },
    PLAYER: {
      movieToPlay: movieStructure,
      isLoading: true
    }
  }
});

it(`Should MoviesList render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <MoviesList
            amountToDisplay={AMOUNT_OF_SIMILAR_MOVIES}
            onMovieListUpdate={() => {}}
          />
        </Router>
      </redux.Provider>
  );

  expect(container.querySelector(`.catalog__movies-list`)).toBeInTheDocument();
});
