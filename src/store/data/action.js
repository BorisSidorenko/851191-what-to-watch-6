import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_PROMO: `data/loadPromo`,
  CLEAR_IS_PROMO_LOADDED_FLAG: `data/clearIsPromoLoaddedFlag`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_MOVIE_BY_ID: `data/loadMovieById`,
  LOAD_REVIEWS_BY_ID: `data/loadReviewsByMovieId`,
  CLEAR_SELECTED_MOVIE: `data/clearSelectedMovie`,
  CHANGE_GENRE: `data/changeGenre`,
  MARK_MOVIE_AS_FAVORITE: `data/markMovieAsFavorite`
};

export const loadPromoAction = createAction(ActionType.LOAD_PROMO, (data) => ({payload: data}));

export const clearIsPromoLoadedFlagAction = createAction(ActionType.CLEAR_IS_PROMO_LOADDED_FLAG, () => ({}));

export const loadMoviesAction = createAction(ActionType.LOAD_MOVIES, (data) => ({payload: data}));

export const loadMovieByIdAction = createAction(ActionType.LOAD_MOVIE_BY_ID, (data) => ({payload: data}));

export const loadReviewsByMovieIdAction = createAction(ActionType.LOAD_REVIEWS_BY_ID, (data) => ({payload: data}));

export const clearSelectedMovieAction = createAction(ActionType.CLEAR_SELECTED_MOVIE, () => ({}));

export const changeGenreAction = createAction(ActionType.CHANGE_GENRE, (genre) => ({payload: genre}));

export const markMovieAsFavoriteAction = createAction(ActionType.MARK_MOVIE_AS_FAVORITE, (data) => ({payload: data}));
