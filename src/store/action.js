import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `data/changeGenre`,
  LOGIN: `user/login`,
  REQUIRED_AUTH: `user/requireAuthorization`,
  ADD_REQUESTED_ROUTE: `user/addRequestedRoute`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_MOVIE_BY_ID: `data/loadMovieById`,
  LOAD_REVIEWS_BY_ID: `data/loadReviewsByMovieId`,
  LOAD_PROMO: `data/loadPromo`,
  CLEAR_IS_PROMO_LOADDED_FLAG: `data/clearIsPromoLoaddedFlag`,
  CLEAR_SELECTED_MOVIE: `data/clearSelectedMovie`,
  MARK_MOVIE_AS_FAVORITE: `data/markMovieAsFavorite`,
  VIDEO_PLAYER_MOVIE: `player/movie`,
  VIDEO_PLAYER_LOADED: `player/movieLoaded`,
  VIDEO_PLAYER_PLAYING: `player/moviePlay`,
  VIDEO_PLAYER_PAUSE: `player/moviePause`,
  VIDEO_PLAYER_REQUESTED_PATH: `player/requestedPath`
};

export const changeGenreAction = createAction(ActionType.CHANGE_GENRE, (genre) => ({payload: genre}));

export const requireAuthorizationAction = createAction(ActionType.REQUIRED_AUTH, (isAuthtorized) => ({payload: isAuthtorized}));

export const loadMoviesAction = createAction(ActionType.LOAD_MOVIES, (data) => ({payload: data}));

export const loadMovieByIdAction = createAction(ActionType.LOAD_MOVIE_BY_ID, (data) => ({payload: data}));

export const loadReviewsByMovieIdAction = createAction(ActionType.LOAD_REVIEWS_BY_ID, (data) => ({payload: data}));

export const clearSelectedMovieAction = createAction(ActionType.CLEAR_SELECTED_MOVIE, () => ({}));

export const loadPromoAction = createAction(ActionType.LOAD_PROMO, (data) => ({payload: data}));

export const clearIsPromoLoadedFlagAction = createAction(ActionType.CLEAR_IS_PROMO_LOADDED_FLAG, () => ({}));

export const addRequestedRouteAction = createAction(ActionType.ADD_REQUESTED_ROUTE, (data) => ({payload: data}));

export const redirectToRouteAction = createAction(ActionType.REDIRECT_TO_ROUTE, (data) => ({payload: data}));

export const loginAction = createAction(ActionType.LOGIN, (data) => ({payload: data}));

export const markMovieAsFavoriteAction = createAction(ActionType.MARK_MOVIE_AS_FAVORITE, (data) => ({payload: data}));

export const playerMovieToPlayAction = createAction(ActionType.VIDEO_PLAYER_MOVIE, (data) => ({payload: data}));

export const playerMovieLoadedAction = createAction(ActionType.VIDEO_PLAYER_LOADED, () => ({}));

export const playerMoviePlayAction = createAction(ActionType.VIDEO_PLAYER_PLAYING, () => ({}));

export const playerMoviePauseAction = createAction(ActionType.VIDEO_PLAYER_PAUSE, () => ({}));

export const addRequestedPlayerPathAction = createAction(ActionType.VIDEO_PLAYER_REQUESTED_PATH, (data) => ({payload: data}));
