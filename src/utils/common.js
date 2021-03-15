import {MovieRatingDesc, AMOUNT_OF_SIMILAR_MOVIES, RoutePaths} from './constatns';
import {DEFAULT_GENRE} from './constatns';

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

export const getMoviesByGenre = (movies, selectedGenre) => {
  if (selectedGenre !== DEFAULT_GENRE) {
    return movies.filter(({genre}) => genre === selectedGenre);
  }

  return movies;
};

export const getSimilarMovies = (allMovies, movie) => {
  if (movie) {
    const {id: clickedMovieId, genre: similarGenre} = movie;
    const allMoviesSameGenre = allMovies.filter(({id, genre}) => genre === similarGenre && id !== clickedMovieId);
    const similarMoviesToShow = allMoviesSameGenre.slice(0, AMOUNT_OF_SIMILAR_MOVIES);
    return similarMoviesToShow;
  }

  return undefined;
};

export const getFavoriteMovies = (movies) => movies.filter((movie) => movie.is_favorite);

export const needToDisableForm = (form, needToDisable) => {
  Array.from(form.elements).forEach((el) => {
    el.disabled = needToDisable;
  });
};

export const getMovieByPathName = (movies, genre, {match, location}) => {
  const {id} = match.params;

  const movie = getMovieById(movies, id);

  switch (location.pathname) {
    case RoutePaths.MY_LIST:
      return getFavoriteMovies(movies);
    case RoutePaths.MAIN:
      return getMoviesByGenre(movies, genre);
    default:
      return getSimilarMovies(movies, movie);
  }
};
