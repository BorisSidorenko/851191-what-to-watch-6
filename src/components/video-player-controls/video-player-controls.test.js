import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import VideoPlayerControls from './video-player-controls';

it(`Should VideoPlayerControls render correctly`, () => {
  const history = createMemoryHistory();

  const props = {
    isPlaying: true,
    isLoading: true,
    movieDuration: 1,
    onPlayButtonClick: () => {},
    onFullScreenButtonClick: () => {}
  };

  const structureToRender = getStructureToRender(history, <VideoPlayerControls {...props} />);
  render(structureToRender);

  expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
  expect(screen.getByText(/Transpotting/i)).toBeInTheDocument();
  expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
});
