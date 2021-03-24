import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {movieStructure} from '../../data-structure';
import GenresList from './genres-list';

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);
it(`Should GenresList render correctly`, () => {
  const handleMock = jest.fn();
  const history = createMemoryHistory();
  const store = mockStore({
    DATA: {
      currentGenre: `Test`,
      movies: [movieStructure]
    }
  });

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <GenresList onGenreChange={handleMock}/>
        </Router>
      </redux.Provider>
  );

  expect(container.querySelector(`.catalog__genres-list`)).toBeInTheDocument();
});
