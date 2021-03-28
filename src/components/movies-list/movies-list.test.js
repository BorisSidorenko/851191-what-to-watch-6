import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {getFakeStore, movieStructure} from '../../utils/test-utils';
import {AMOUNT_OF_SIMILAR_MOVIES} from '../../utils/constatns';
import MoviesList from './movies-list';

it(`Should MoviesList render correctly`, () => {
  const fakeStore = getFakeStore();
  const history = createMemoryHistory();

  render(
      <redux.Provider store={fakeStore}>
        <Router history={history}>
          <MoviesList
            amountToDisplay={AMOUNT_OF_SIMILAR_MOVIES}
            onMovieListUpdate={() => {}}
          />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByRole(`article`)).toBeInTheDocument();
  expect(screen.getByRole(`img`)).toHaveAttribute(`src`, movieStructure.preview_image);
});
