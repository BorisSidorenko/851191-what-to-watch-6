import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {RoutePaths} from '../../utils/constatns';
import {createMemoryHistory} from 'history';
import {movieStructure} from '../../data-structure';
import {getFakeStore} from '../../data-structure';
import MovieCardDescription from './movie-card-description';


it(`Should MovieCardDescription render correctly`, () => {
  const store = getFakeStore();

  const {name, genre, released} = movieStructure;

  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MovieCardDescription {...movieStructure} reviewPageLink={RoutePaths.MAIN}/>
        </Router>
      </redux.Provider>
  );

  expect(container.querySelector(`.movie-card__desc`)).toBeInTheDocument();
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(genre)).toBeInTheDocument();
  expect(screen.getByText(released)).toBeInTheDocument();
});
