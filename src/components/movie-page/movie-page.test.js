import React from 'react';
import {render, screen} from '@testing-library/react';
import {Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import MoviePage from './movie-page';

it(`Should MoviePage render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  const structureToRender = getStructureToRender(
      history,
      <Switch>
        <Route path={`${RoutePaths.MOVIE_PAGE}/:id`}
          render={(routeProps) => (
            <MoviePage
              {...routeProps}
            />
          )}
        />
      </Switch>
  );

  render(structureToRender);

  expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
  expect(screen.getByText(/Play/)).toBeInTheDocument();
  expect(screen.getByText(/My list/i)).toBeInTheDocument();
  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  expect(screen.getByText(/Overview/i)).toBeInTheDocument();
  expect(screen.getByText(/Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  expect(screen.getByText(/More like this/i)).toBeInTheDocument();
});
