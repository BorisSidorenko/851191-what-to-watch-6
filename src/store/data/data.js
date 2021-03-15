import {DEFAULT_GENRE} from '../../utils/constatns';
import {ActionType} from '../../store/action';

const initialState = {
  movies: [],
  selectedMovie: null,
  selectedMovieReviews: [],
  genre: DEFAULT_GENRE,
  isPromoLoaded: false
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        selectedMovie: action.payload,
        isPromoLoaded: true
      };
    case ActionType.CLEAR_IS_PROMO_LOADDED_FLAG:
      return {
        ...state,
        isPromoLoaded: initialState.isPromoLoaded
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case ActionType.LOAD_MOVIE_BY_ID:
      return {
        ...state,
        selectedMovie: action.payload
      };
    case ActionType.LOAD_REVIEWS_BY_ID:
      return {
        ...state,
        selectedMovieReviews: action.payload
      };
    case ActionType.CLEAR_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: initialState.selectedMovie
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.MARK_MOVIE_AS_FAVORITE:
      return {
        ...state,
        selectedMovie: action.payload
      };
    default:
      return state;
  }
};
