import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, getFakeStore} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import Main from './main';

it(`Should Main render correctly`, () => {
  const fakeStore = getFakeStore();

  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  const {container} = render(
      <redux.Provider store={fakeStore}>
        <Router history={history}>
          <Main />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`WTW`)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
  expect(screen.getByText(`Play`)).toBeInTheDocument();
  expect(screen.getByText(`My list`)).toBeInTheDocument();
  expect(container.querySelector(`.catalog`)).toBeInTheDocument();
  expect(screen.getByText(`Catalog`)).toBeInTheDocument();
  expect(container.querySelector(`.copyright`)).toBeInTheDocument();
});
