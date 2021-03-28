import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, getFakeStore} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import PromoMovie from './promo-movie';

it(`Should PromoMovie render correctly`, () => {
  const fakeStore = getFakeStore();

  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  render(
      <redux.Provider store={fakeStore}>
        <Router history={history}>
          <PromoMovie />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`WTW`)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
  expect(screen.getByText(`Play`)).toBeInTheDocument();
  expect(screen.getByText(`My list`)).toBeInTheDocument();
});
