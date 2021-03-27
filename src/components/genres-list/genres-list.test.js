import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {DEFAULT_GENRE} from '../../utils/constatns';
import {movieStructure, getFakeStore} from '../../data-structure';
import GenresList from './genres-list';

it(`Should GenresList render correctly`, () => {
  const handleMock = jest.fn();
  const history = createMemoryHistory();
  const store = getFakeStore();

  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <GenresList onGenreChange={handleMock}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getAllByRole(`link`).map((el) => el.innerHTML)).toHaveLength(2);
  expect(screen.getAllByRole(`link`).map((el) => el.innerHTML)).toEqual([DEFAULT_GENRE, movieStructure.genre]);
});
