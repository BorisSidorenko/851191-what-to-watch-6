import {APIRoute} from '../api/api';

export const loadMovieList = () => (_dispatch, _getState, api) => api.get(APIRoute.MOVIES);

export const loadMovieById = (id) => (_dispatch, _getState, api) => api.get(`${APIRoute.MOVIES}/${id}`);

export const loadReviewsByMovieId = (movieId) => (_dispatch, _getState, api) => api.get(`${APIRoute.REVIEWS}/${movieId}`);

export const addReview = (movieId, {rating, comment}) => (_dispatch, _getState, api) => {
  return api.post(`${APIRoute.REVIEWS}/${movieId}`, {rating, comment});
};

export const loadPromoMovie = () => (_dispatch, _getState, api) => api.get(APIRoute.PROMO);

export const checkAuth = () => (_dispatch, _getState, api) => api.get(APIRoute.LOGIN);

export const login = ({email, password}) => (_dispatch, _getState, api) => api.post(APIRoute.LOGIN, {email, password});

export const addMovieToFavorite = (movieId, isFavorite) => (_dispatch, _getState, api) => {
  return api.post(`${APIRoute.FAVORITE}/${movieId}/${isFavorite ? 1 : 0}`, {movieId, isFavorite});
};
