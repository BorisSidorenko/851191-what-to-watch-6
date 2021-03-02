import Reviews from '../mocks/reviews';
import {DEFAULT_GENRE, AuthorizationStatus} from '../utils/constatns';
import {ActionType} from '../store/action';

const initialState = {
  movies: [],
  promoMovie: {},
  reviews: Reviews,
  genre: DEFAULT_GENRE,
  isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED,
  isMoviesLoaded: false,
  isPromoLoaded: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoMovie: action.payload,
        isPromoLoaded: true
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isMoviesLoaded: true
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
    default:
      return state;
  }
};
