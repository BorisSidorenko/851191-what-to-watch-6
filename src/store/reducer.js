import {DEFAULT_GENRE, RoutePaths} from '../utils/constatns';
import {ActionType} from '../store/action';

const initialState = {
  user: null,
  movies: [],
  selectedMovie: null,
  selectedMovieReviews: [],
  genre: DEFAULT_GENRE,
  isAuthtorized: null,
  isMoviesLoaded: false,
  isPromoLoaded: false,
  requestedRoute: RoutePaths.MAIN
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        user: action.payload
      };
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
        movies: action.payload,
        isMoviesLoaded: true
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
    case ActionType.REQUIRED_AUTH:
      return {
        ...state,
        isAuthtorized: action.payload
      };
    case ActionType.ADD_REQUESTED_ROUTE:
      return {
        ...state,
        requestedRoute: action.payload
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
