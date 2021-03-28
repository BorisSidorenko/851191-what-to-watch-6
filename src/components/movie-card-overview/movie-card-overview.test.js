import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import MovieCardOverview from './movie-card-overview';

it(`Should MovieCardOverview render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <MovieCardOverview {...movieStructure} />);
  render(structureToRender);

  expect(screen.getByText(movieStructure.rating)).toBeInTheDocument();
  expect(screen.getByText(`${movieStructure.scores_count} ratings`)).toBeInTheDocument();
  expect(screen.getByText(`Director: ${movieStructure.director}`)).toBeInTheDocument();
  expect(screen.getByText(`Starring: ${movieStructure.starring.join(`, `)}`)).toBeInTheDocument();
});
