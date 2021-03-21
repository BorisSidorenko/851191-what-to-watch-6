import React from 'react';
import {render} from '@testing-library/react';
import VideoPlayerControls from './video-player-controls';

it(`Should VideoPlayerControls render correctly`, () => {
  const props = {
    isPlaying: true,
    isLoading: true,
    movieDuration: 1,
    onPlayButtonClick: () => {},
    onFullScreenButtonClick: () => {}
  };

  const {getByText} = render(<VideoPlayerControls {...props} />);

  const togglerText = getByText(`Toggler`);
  const transpottingText = getByText(`Transpotting`);
  const fullScreenText = getByText(`Full screen`);

  expect(togglerText).toBeInTheDocument();
  expect(transpottingText).toBeInTheDocument();
  expect(fullScreenText).toBeInTheDocument();
});
