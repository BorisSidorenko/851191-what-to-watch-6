import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import MovieCardAddToListButton from './movie-card-add-to-list-button';

it(`Should MovieCardAddToListButton render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <MovieCardAddToListButton />);
  render(structureToRender);

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
