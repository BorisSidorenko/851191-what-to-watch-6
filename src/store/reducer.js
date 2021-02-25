import Movies from '../mocks/movies';
import {DEFAULT_GENRE} from '../utils/constatns';
import {getMoviesByGenre, getSimilarMovies} from '../utils/common';
import {ActionType} from '../store/action';

const initialState = {
  genre: DEFAULT_GENRE,
  filteredMoviesByGenre: Movies,
  allMovies: Movies,
  similarMovies: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.LOAD_MOVIE_LIST:
      return {
        ...state,
        filteredMoviesByGenre: getMoviesByGenre(state.allMovies, state.genre)
      };
    case ActionType.LOAD_SIMILAR_MOVIE_LIST:
      return {
        ...state,
        similarMovies: getSimilarMovies(action.payload)
      };
    default:
      return state;
  }
};
