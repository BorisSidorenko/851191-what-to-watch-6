import {MOVIE_RATING_DESC} from './constatns';

export const getRandomIntInRange = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomInt = (maxNumber) => getRandomIntInRange(maxNumber - 1);

export const getArrayOfObjects = (count, cb) => Array(count).fill().map(() => cb());

export const getRatingDescription = (rating) => {
  let ratingDesc = ``;

  if (rating <= MOVIE_RATING_DESC.BAD) {
    ratingDesc = `Bad`;
  } else if (rating <= MOVIE_RATING_DESC.NORMAL) {
    ratingDesc = `Normal`;
  } else if (rating <= MOVIE_RATING_DESC.GOOD) {
    ratingDesc = `Good`;
  } else if (rating <= MOVIE_RATING_DESC.AWESOME) {
    ratingDesc = `Very good`;
  } else if (rating === MOVIE_RATING_DESC.AWESOME) {
    ratingDesc = `Awesome`;
  }

  return ratingDesc;
};
