import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {TAB_ITEMS, RoutePaths} from '../../utils/constatns';
import MovieCardNavigation from './movie-card-navigation';

it(`Should MovieCardNavigation render correctly`, () => {
  const history = createMemoryHistory();
  const [overviewTab] = TAB_ITEMS;
  const pathname = RoutePaths.MOVIE_PAGE;

  render(
      <Router history={history}>
        <MovieCardNavigation url={overviewTab} pathname={pathname}/>
      </Router>
  );

  expect(screen.getByRole(`navigation`)).toBeInTheDocument();
  expect(screen.getByRole(`list`)).toBeInTheDocument();
  expect(screen.getByText(`Overview`)).toBeInTheDocument();
  expect(screen.getByText(`Details`)).toBeInTheDocument();
  expect(screen.getByText(`Reviews`)).toBeInTheDocument();
});
