import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import MovieCardImage from './movie-card-image';

it(`Should MovieCardImage render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <MovieCardImage preview={movieStructure.preview_image} name={movieStructure.name} />);
  render(structureToRender);

  expect(screen.getByAltText(movieStructure.name)).toBeInTheDocument();
});
