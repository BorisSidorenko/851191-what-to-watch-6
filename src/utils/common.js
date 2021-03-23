import {MovieRatingDesc, RoutePaths, DEFAULT_GENRE, AMOUNT_OF_SIMILAR_MOVIES} from './constatns';

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

export const getFavoriteMovies = (movies) => movies.filter((movie) => movie.is_favorite);

export const getMoviesByGenre = (selectedGenre, movies) => {
  if (selectedGenre !== DEFAULT_GENRE) {
    return movies.filter(({genre}) => genre === selectedGenre);
  } else {
    return movies;
  }
};

export const getSimilarMovies = (selectedMovie, movies) => {
  if (selectedMovie) {
    const {id: clickedMovieId, genre: similarGenre} = selectedMovie;
    const allMoviesSameGenre = movies.filter(({id, genre}) => genre === similarGenre && id !== clickedMovieId);
    return allMoviesSameGenre.slice(0, AMOUNT_OF_SIMILAR_MOVIES);
  } else {
    return movies;
  }
};

export const getMovieByPathName = (movies, genre, selectedMovie, path) => {
  switch (path) {
    case RoutePaths.MY_LIST:
      return getFavoriteMovies(movies);
    case RoutePaths.MAIN:
      return getMoviesByGenre(genre, movies);
    default:
      return getSimilarMovies(selectedMovie, movies);
  }
};
