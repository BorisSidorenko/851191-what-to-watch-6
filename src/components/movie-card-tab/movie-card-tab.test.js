import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {TAB_ITEMS, RoutePaths} from '../../utils/constatns';
import MovieCardTab from './movie-card-tab';

it(`Should MovieCardTab render correctly`, () => {
  const history = createMemoryHistory();
  const [overviewTab, detailsTab] = TAB_ITEMS;
  const pathname = RoutePaths.MOVIE_PAGE;

  render(
      <Router history={history}>
        <MovieCardTab tab={overviewTab} url={detailsTab} pathname={pathname}/>
      </Router>
  );

  expect(screen.getByText(overviewTab)).toBeInTheDocument();
});
