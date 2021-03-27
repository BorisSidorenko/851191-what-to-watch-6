import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {getFakeStore} from '../../data-structure';
import {AMOUNT_OF_SIMILAR_MOVIES} from '../../utils/constatns';
import MoviesList from './movies-list';

it(`Should MoviesList render correctly`, () => {
  const fakeStore = getFakeStore();
  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={fakeStore}>
        <Router history={history}>
          <MoviesList
            amountToDisplay={AMOUNT_OF_SIMILAR_MOVIES}
            onMovieListUpdate={() => {}}
          />
        </Router>
      </redux.Provider>
  );

  expect(container.querySelector(`.catalog__movies-list`)).toBeInTheDocument();
});
