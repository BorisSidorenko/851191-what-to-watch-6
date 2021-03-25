import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {TAB_ITEMS, RoutePaths} from '../../utils/constatns';
import MovieCardNavigation from './movie-card-navigation';

it(`Should MovieCardNavigation render correctly`, () => {
  const history = createMemoryHistory();
  const [overviewTab] = TAB_ITEMS;
  const pathname = RoutePaths.MOVIE_PAGE;

  const {container} = render(
    <Router history={history}>
      <MovieCardNavigation url={overviewTab} pathname={pathname}/>
    </Router>
  );

  expect(container.querySelector(`.movie-nav`)).toBeInTheDocument();
  expect(container.querySelector(`.movie-nav__list`)).toBeInTheDocument();
});
