import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {RoutePaths} from '../../utils/constatns';
import {createMemoryHistory} from 'history';
import {movieStructure} from '../../utils/test-utils';
import {getFakeStore} from '../../utils/test-utils';
import MovieCardDescription from './movie-card-description';


it(`Should MovieCardDescription render correctly`, () => {
  const store = getFakeStore();

  const {name, genre, released} = movieStructure;

  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MovieCardDescription {...movieStructure} reviewPageLink={RoutePaths.MAIN}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(genre)).toBeInTheDocument();
  expect(screen.getByText(released)).toBeInTheDocument();
  expect(screen.getByText(/Play/i)).toBeInTheDocument();
  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
