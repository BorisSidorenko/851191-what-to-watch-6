import Movies from '../mocks/movies';
import {MovieRatingDesc, AMOUNT_OF_SIMILAR_MOVIES} from './constatns';

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

export const getMovieById = ({match}) => Movies.find(({id}) => id.toString() === match.params.id);

export const getSimilarMovies = (currentMovieId, currentMovieGenre) => {
  const allMoviesSameGenre = Movies.filter(({id, genre}) => genre === currentMovieGenre && id !== currentMovieId);
  const similarMoviesToShow = allMoviesSameGenre.slice(0, AMOUNT_OF_SIMILAR_MOVIES);
  return similarMoviesToShow;
};
