import {createAction} from '@reduxjs/toolkit';

export const ActionType = {

  VIDEO_PLAYER_MOVIE: `player/movie`,
  CLEAR_VIDEO_PLAYER_MOVIE: `player/clearMovie`,
  VIDEO_PLAYER_LOADED: `player/movieLoaded`,
  VIDEO_PLAYER_NOT_LOADED: `player/movieNotLoaded`,
  VIDEO_PLAYER_PLAYING: `player/moviePlay`,
  VIDEO_PLAYER_PAUSE: `player/moviePause`,
  VIDEO_PLAYER_REQUESTED_PATH: `player/requestedPath`
};

export const playerMovieToPlayAction = createAction(ActionType.VIDEO_PLAYER_MOVIE, (data) => ({payload: data}));

export const clearPlayerMovieToPlayAction = createAction(ActionType.CLEAR_VIDEO_PLAYER_MOVIE, () => ({}));

export const playerMovieLoadedAction = createAction(ActionType.VIDEO_PLAYER_LOADED, () => ({}));

export const playerMoviePlayAction = createAction(ActionType.VIDEO_PLAYER_PLAYING, (data) => ({payload: data}));

export const addRequestedPlayerPathAction = createAction(ActionType.VIDEO_PLAYER_REQUESTED_PATH, (data) => ({payload: data}));
