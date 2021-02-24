import Movies from '../mocks/movies';
import {GENRES} from '../utils/constatns';
import {getMoviesByGenre} from '../utils/common';
import {ActionType} from '../store/action';

const [allGenres] = GENRES;

const initialState = {
  genre: allGenres,
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
