import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import {RoutePaths, DEFAULT_GENRE} from '../../utils/constatns';
import Catalog from './catalog';

it(`Should Main render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  const structureToRender = getStructureToRender(history, <Catalog catalogClass={`catalog`} />);
  render(structureToRender);

  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  expect(screen.getAllByRole(`link`).map((el) => el.innerHTML)).toHaveLength(2);
  expect(screen.getAllByRole(`link`).map((el) => el.innerHTML)).toEqual([DEFAULT_GENRE, movieStructure.genre]);
});
