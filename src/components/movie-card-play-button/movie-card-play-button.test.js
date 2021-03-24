import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {movieStructure} from '../../data-structure';
import MovieCardPlayButton from './movie-card-play-button';

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);
it(`Should MovieCardPlayButton render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    DATA: {
      selectedMovie: movieStructure
    }
  });

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MovieCardPlayButton />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Play`)).toBeInTheDocument();
});
