import {MovieRatingDesc, RoutePaths} from './constatns';
import {getFavoriteMoviesSelector, getSimilarMoviesSelector, getMoviesByGenreSelector} from '../store/data/selectors';

export const getRandomIntInRange = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomInt = (maxNumber) => getRandomIntInRange(maxNumber - 1);

export const getArrayOfObjects = (count, cb) => Array(count).fill().map(() => cb());

export const getRatingDescription = (rating) => {
  let ratingDesc = ``;

  if (rating <= MovieRatingDesc.BAD) {
    ratingDesc = `Bad`;
  } else if (rating <= MovieRatingDesc.NORMAL) {
    ratingDesc = `Normal`;
  } else if (rating <= MovieRatingDesc.GOOD) {
    ratingDesc = `Good`;
  } else if (rating <= MovieRatingDesc.AWESOME) {
    ratingDesc = `Very good`;
  } else if (rating === MovieRatingDesc.AWESOME) {
    ratingDesc = `Awesome`;
  }

  return ratingDesc;
};

export const getMovieById = (movies, movieId) => movieId ? movies.find(({id}) => id.toString() === movieId.toString()) : undefined;

export const needToDisableForm = (form, needToDisable) => {
  Array.from(form.elements).forEach((el) => {
    el.disabled = needToDisable;
  });
};

export const getMovieByPathName = (state, {location}) => {
  switch (location.pathname) {
    case RoutePaths.MY_LIST:
      return getFavoriteMoviesSelector(state);
    case RoutePaths.MAIN:
      return getMoviesByGenreSelector(state);
    default:
      return getSimilarMoviesSelector(state);
  }
};
