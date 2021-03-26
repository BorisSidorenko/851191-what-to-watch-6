import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, authInfoStructure} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import MovieCard from './movie-card';
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

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

it(`Should MovieCard render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MY_LIST}`);

  const {container} = render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <MovieCard
            movieId={movieStructure.id}
            {...movieStructure}
            onMovieCardMouseEnter={() => {}}
            onMovieCardMouseLeave={() => {}}
            currentMovieId={0}
          />
        </Router>
      </redux.Provider>
  );

  expect(container.querySelector(`.small-movie-card`)).toBeInTheDocument();
  expect(container.querySelector(`.small-movie-card__link`)).toBeInTheDocument();
  expect(container.querySelector(`.small-movie-card__title`)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
});
