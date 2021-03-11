import {ActionCreator} from '../store/action';
import {APIRoute} from '../api/api';
import {RoutePaths} from '../utils/constatns';

export const loadMovieList = () => (dispatch, _getState, api) => api.get(APIRoute.MOVIES);

export const loadMovieById = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.MOVIES}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadMovieById(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(RoutePaths.NOT_FOUND)));
};

export const loadReviewsByMovieId = (movieId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.REVIEWS}/${movieId}`)
    .then(({data}) => dispatch(ActionCreator.loadReviewsByMovieId(data)));
};

export const addReview = (movieId, {rating, comment}) => (_dispatch, _getState, api) => {
  return api.post(`${APIRoute.REVIEWS}/${movieId}`, {rating, comment});
};

export const loadPromoMovie = () => (dispatch, _getState, api) => {
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromo(data)));
};

export const checkAuth = () => (_dispatch, _getState, api) => api.get(APIRoute.LOGIN);

export const login = ({email, password}) => (_dispatch, _getState, api) => api.post(APIRoute.LOGIN, {email, password});

export const addMovieToFavorite = (movieId, isFavorite) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${movieId}/${isFavorite ? 1 : 0}`, {movieId, isFavorite})
    .then(({data}) => dispatch(ActionCreator.markMovieAsFavorite(data)))
    .catch(() => {});
};
