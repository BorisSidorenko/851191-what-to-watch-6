import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import {AMOUNT_OF_SIMILAR_MOVIES} from '../../utils/constatns';
import MoviesList from './movies-list';

it(`Should MoviesList render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <MoviesList amountToDisplay={AMOUNT_OF_SIMILAR_MOVIES} onMovieListUpdate={() => {}} />);
  render(structureToRender);

  expect(screen.getByRole(`article`)).toBeInTheDocument();
  expect(screen.getByRole(`img`)).toHaveAttribute(`src`, movieStructure.preview_image);
});
