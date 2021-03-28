import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, getFakeStore} from '../../utils/test-utils';
import {RoutePaths, DEFAULT_GENRE} from '../../utils/constatns';
import Catalog from './catalog';

it(`Should Main render correctly`, () => {
  const fakeStore = getFakeStore();

  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  render(
      <redux.Provider store={fakeStore}>
        <Router history={history}>
          <Catalog catalogClass={`catalog`} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  expect(screen.getAllByRole(`link`).map((el) => el.innerHTML)).toHaveLength(2);
  expect(screen.getAllByRole(`link`).map((el) => el.innerHTML)).toEqual([DEFAULT_GENRE, movieStructure.genre]);
});
