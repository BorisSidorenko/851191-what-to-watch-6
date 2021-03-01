import Movies from '../mocks/movies';
import Reviews from '../mocks/reviews';
import {getRandomInt} from '../utils/common';
import {DEFAULT_GENRE, AuthorizationStatus} from '../utils/constatns';
import {ActionType} from '../store/action';

const initialState = {
  movies: Movies,
  promoMovie: Movies[getRandomInt(Movies.length)],
  reviews: Reviews,
  genre: DEFAULT_GENRE,
  isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
