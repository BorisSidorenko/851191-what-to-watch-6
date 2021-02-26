import Movies from '../mocks/movies';
import Reviews from '../mocks/reviews';
import {getRandomInt} from '../utils/common';
import {DEFAULT_GENRE} from '../utils/constatns';
import {ActionType} from '../store/action';

const initialState = {
  movies: Movies,
  promoMovie: Movies[getRandomInt(Movies.length)],
  reviews: Reviews,
  genre: DEFAULT_GENRE,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    default:
      return state;
  }
};
