import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, getFakeStore} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import MoviePage from './movie-page';

it(`Should MoviePage render correctly`, () => {
  const fakeStore = getFakeStore();

  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  render(
      <redux.Provider store={fakeStore}>
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
