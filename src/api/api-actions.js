import {ActionCreator} from '../store/action';
import {APIRoute} from '../api/api';
import {AuthorizationStatus} from '../utils/constatns';

export const loadMovieList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)));
};

export const loadMovieById = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.MOVIES}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadMovieById(data)));
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

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)));
};
