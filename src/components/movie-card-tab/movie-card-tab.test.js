import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {TAB_ITEMS, RoutePaths} from '../../utils/constatns';
import {getStructureToRender} from '../../utils/test-utils';
import MovieCardTab from './movie-card-tab';

it(`Should MovieCardTab render correctly`, () => {
  const history = createMemoryHistory();
  const [overviewTab, detailsTab] = TAB_ITEMS;
  const pathname = RoutePaths.MOVIE_PAGE;

  const structureToRender = getStructureToRender(history, <MovieCardTab tab={overviewTab} url={detailsTab} pathname={pathname} />);
  render(structureToRender);

  expect(screen.getByText(overviewTab)).toBeInTheDocument();
});
