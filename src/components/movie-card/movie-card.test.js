import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import MovieCard from './movie-card';

it(`Should MovieCard render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MY_LIST}`);

  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  const structureToRender = getStructureToRender(
      history,
      <MovieCard
        movieId={movieStructure.id}
        {...movieStructure}
        onMovieCardMouseEnter={() => {}}
        onMovieCardMouseLeave={() => {}}
        currentMovieId={0}
      />
  );

  render(structureToRender);

  expect(screen.getByRole(`article`)).toBeInTheDocument();
  expect(screen.getByRole(`img`)).toHaveAttribute(`src`, movieStructure.preview_image);
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
});
