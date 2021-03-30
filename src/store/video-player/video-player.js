import {playerMovieToPlayAction, clearPlayerMovieToPlayAction, addRequestedPlayerPathAction, playerMovieLoadedAction, playerMoviePlayAction} from '../../store/action';
import {RoutePaths} from '../../utils/constatns';
import {createReducer} from '@reduxjs/toolkit';

export const initialState = {
  movieToPlay: null,
  isLoading: true,
  isPlaying: false,
  requestedPlayerPath: RoutePaths.MAIN
};

export const videoPlayer = createReducer(initialState, (builder) => {
  builder.addCase(playerMovieToPlayAction, (state, action) => {
    state.movieToPlay = action.payload;
  });
  builder.addCase(clearPlayerMovieToPlayAction, (state) => {
    state.movieToPlay = initialState.movieToPlay;
    state.isLoading = initialState.isLoading;
  });
  builder.addCase(addRequestedPlayerPathAction, (state, action) => {
    state.requestedPlayerPath = action.payload;
  });
  builder.addCase(playerMovieLoadedAction, (state) => {
    state.isLoading = false;
  });
  builder.addCase(playerMoviePlayAction, (state, action) => {
    state.isPlaying = action.payload;
  });
});
