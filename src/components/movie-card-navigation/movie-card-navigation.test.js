import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {TAB_ITEMS, RoutePaths} from '../../utils/constatns';
import {getStructureToRender} from '../../utils/test-utils';
import MovieCardNavigation from './movie-card-navigation';

it(`Should MovieCardNavigation render correctly`, () => {
  const history = createMemoryHistory();
  const [overviewTab] = TAB_ITEMS;
  const pathname = RoutePaths.MOVIE_PAGE;

  const structureToRender = getStructureToRender(history, <MovieCardNavigation url={overviewTab} pathname={pathname} />);
  render(structureToRender);

  expect(screen.getByRole(`navigation`)).toBeInTheDocument();
  expect(screen.getByRole(`list`)).toBeInTheDocument();
  expect(screen.getByText(/Overview/i)).toBeInTheDocument();
  expect(screen.getByText(/Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
});
