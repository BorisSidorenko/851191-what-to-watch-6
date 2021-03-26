import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, authInfoStructure, reviewStructure} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import MoviePage from './movie-page';
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
      selectedMovieReviews: [reviewStructure],
      movies: [movieStructure],
      genre: movieStructure.genre
    },
    USER: {
      isAuthtorized: AuthorizationStatus.AUTHORIZED,
      user: authInfoStructure
    },
    PLAYER: {
      isPlaying: true
    }
  }
});

it(`Should MoviePage render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <Switch>
            <Route path={`${RoutePaths.MOVIE_PAGE}/:id`}
              render={(routeProps) => (
                <MoviePage
                  {...routeProps}
                />
              )}
            />
          </Switch>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`WTW`)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
  expect(screen.getByText(`Play`)).toBeInTheDocument();
  expect(screen.getByText(`My list`)).toBeInTheDocument();
  expect(screen.getByText(`Add review`)).toBeInTheDocument();
  expect(screen.getByText(`Overview`)).toBeInTheDocument();
  expect(screen.getByText(`Details`)).toBeInTheDocument();
  expect(screen.getByText(`Reviews`)).toBeInTheDocument();
  expect(screen.getByText(`More like this`)).toBeInTheDocument();
});
