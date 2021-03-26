import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import VideoPlayer from './video-player';
import {createAPI} from '../../api/api';
import rootReducer from '../../store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI({});
const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
  preloadedState: {
    PLAYER: {
      movieToPlay: movieStructure,
      requestedPlayerPath: RoutePaths.MAIN,
      isLoading: false,
      isPlaying: false,
    }
  }
});

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

it(`Should VideoPlayer render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <VideoPlayer movieId={movieStructure.id} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Exit`)).toBeInTheDocument();
  expect(screen.getByText(`Toggler`)).toBeInTheDocument();
  expect(screen.getByText(`Play`)).toBeInTheDocument();
  expect(screen.getByText(`Transpotting`)).toBeInTheDocument();
  expect(screen.getByText(`Full screen`)).toBeInTheDocument();
});
