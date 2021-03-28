import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import MovieCardPlayButton from './movie-card-play-button';

it(`Should MovieCardPlayButton render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <MovieCardPlayButton />);
  render(structureToRender);

  expect(screen.getByText(/Play/i)).toBeInTheDocument();
});
