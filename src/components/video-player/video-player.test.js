import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import VideoPlayer from './video-player';

it(`Should VideoPlayer render correctly`, () => {
  const history = createMemoryHistory();

  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  const structureToRender = getStructureToRender(history, <VideoPlayer movieId={movieStructure.id} />);
  render(structureToRender);

  expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
  expect(screen.getByText(/Play/i)).toBeInTheDocument();
  expect(screen.getByText(/Transpotting/i)).toBeInTheDocument();
  expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
});
