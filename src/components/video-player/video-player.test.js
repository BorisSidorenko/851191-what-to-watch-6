import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, getFakeStore} from '../../data-structure';
import VideoPlayer from './video-player';

it(`Should VideoPlayer render correctly`, () => {
  const fakeStore = getFakeStore();
  const history = createMemoryHistory();

  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  render(
      <redux.Provider store={fakeStore}>
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
