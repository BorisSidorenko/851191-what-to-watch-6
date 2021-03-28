import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import PromoMovieInfo from './promo-movie-info';

it(`Should PromoMovieInfo render correctly`, () => {
  const {name, genre, released} = movieStructure;
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <PromoMovieInfo {...movieStructure} poster={movieStructure.poster_image} />);
  render(structureToRender);

  expect(screen.getByRole(`img`)).toHaveAttribute(`src`, movieStructure.poster_image);
  expect(screen.getByRole(`img`)).toHaveAttribute(`alt`, movieStructure.name);
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(genre)).toBeInTheDocument();
  expect(screen.getByText(released)).toBeInTheDocument();
  expect(screen.getByRole(`link`).innerHTML).toMatch(/Play/i);
  expect(screen.getByRole(`button`).innerHTML).toMatch(/My list/i);
  expect(screen.queryByText(/Add review/i)).not.toBeInTheDocument();
});
