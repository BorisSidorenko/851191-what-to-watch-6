import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import MovieCardDetails from './movie-card-details';

it(`Should MovieCardDetails render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <MovieCardDetails {...movieStructure} />);
  render(structureToRender);

  expect(screen.getByText(`Director`)).toBeInTheDocument();
  expect(screen.getByText(`Starring`)).toBeInTheDocument();
  expect(screen.getByText(`Run Time`)).toBeInTheDocument();
  expect(screen.getByText(`Genre`)).toBeInTheDocument();
  expect(screen.getByText(`Released`)).toBeInTheDocument();
});
