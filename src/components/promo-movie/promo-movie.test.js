import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import PromoMovie from './promo-movie';

it(`Should PromoMovie render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  const structureToRender = getStructureToRender(history, <PromoMovie />);
  render(structureToRender);

  expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
  expect(screen.getByText(/Play/i)).toBeInTheDocument();
  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
