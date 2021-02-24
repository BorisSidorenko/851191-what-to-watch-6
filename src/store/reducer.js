import Movies from '../mocks/movies';
import {DEFAULT_GENRE} from '../utils/constatns';
import {getMoviesByGenre} from '../utils/common';
import {ActionType} from '../store/action';

const initialState = {
  genre: DEFAULT_GENRE,
  movies: Movies
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.MOVIE_LIST:
      return {
        ...state,
        movies: getMoviesByGenre(Movies, state.genre)
      };
    default:
      return state;
  }
};
