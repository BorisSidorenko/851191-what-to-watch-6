import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import MovieCardTitle from './movie-card-title';

it(`Should MovieCardTitle render correctly`, () => {
  const history = createMemoryHistory();
  const {id, name} = movieStructure;

  const structureToRender = getStructureToRender(history, <MovieCardTitle movieId={id} name={name} />);
  render(structureToRender);

  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
});
