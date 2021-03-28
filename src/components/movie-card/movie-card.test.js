import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, getFakeStore} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import MovieCard from './movie-card';

it(`Should MovieCard render correctly`, () => {
  const fakeStore = getFakeStore();

  const history = createMemoryHistory();
  history.push(`${RoutePaths.MY_LIST}`);

  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  render(
      <redux.Provider store={fakeStore}>
        <Router history={history}>
          <MovieCard
            movieId={movieStructure.id}
            {...movieStructure}
            onMovieCardMouseEnter={() => {}}
            onMovieCardMouseLeave={() => {}}
            currentMovieId={0}
          />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByRole(`article`)).toBeInTheDocument();
  expect(screen.getByRole(`img`)).toHaveAttribute(`src`, movieStructure.preview_image);
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
});
