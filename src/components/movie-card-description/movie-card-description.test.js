import React from 'react';
import {render, screen} from '@testing-library/react';
import {RoutePaths} from '../../utils/constatns';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import MovieCardDescription from './movie-card-description';

it(`Should MovieCardDescription render correctly`, () => {
  const {name, genre, released} = movieStructure;
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <MovieCardDescription {...movieStructure} reviewPageLink={RoutePaths.MAIN}/>);
  render(structureToRender);

  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(genre)).toBeInTheDocument();
  expect(screen.getByText(released)).toBeInTheDocument();
  expect(screen.getByText(/Play/i)).toBeInTheDocument();
  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
