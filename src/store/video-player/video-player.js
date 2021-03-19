import {playerMovieToPlayAction, addRequestedPlayerPathAction, playerMovieLoadedAction, playerMoviePlayAction, playerMoviePauseAction} from '../../store/action';
import {RoutePaths} from '../../utils/constatns';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  movieToPlay: null,
  isLoading: true,
  isPlaying: false,
  requestedPlayerPath: RoutePaths.MAIN
};

export const videoPlayer = createReducer(initialState, (builder) => {
  builder.addCase(playerMovieToPlayAction, (state, action) => {
    state.movieToPlay = action.payload;
  });
  builder.addCase(addRequestedPlayerPathAction, (state, action) => {
    state.requestedPlayerPath = action.payload;
  });
  builder.addCase(playerMovieLoadedAction, (state) => {
    state.isLoading = false;
  });
  builder.addCase(playerMoviePlayAction, (state) => {
    state.isPlaying = true;
  });
  builder.addCase(playerMoviePauseAction, (state) => {
    state.isPlaying = false;
  });
});
