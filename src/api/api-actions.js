import {ActionCreator} from '../store/action';
import {APIRoute} from '../api/api';

export const fetchMovieList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)));
};
