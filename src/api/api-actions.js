import {ActionCreator} from '../store/action';
import {APIRoute} from '../api/api';
import {AuthorizationStatus, RoutePaths} from '../utils/constatns';

export const loadMovieList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)));
};

export const loadMovieById = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.MOVIES}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadMovieById(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(RoutePaths.NOT_FOUND)));
};

export const loadReviewsById = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviewsById(data)));
};

export const loadPromoMovie = () => (dispatch, _getState, api) => {
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromo(data)));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)))
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.login(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)))
    .then(() => dispatch(ActionCreator.redirectToRoute(getState().requestedRoute)));
};
