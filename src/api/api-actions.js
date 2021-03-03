import {ActionCreator} from '../store/action';
import {APIRoute} from '../api/api';

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
