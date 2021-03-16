import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {DEFAULT_GENRE, AMOUNT_OF_SIMILAR_MOVIES} from '../../../src/utils/constatns';

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getSelectedMovie = (state) => state[NameSpace.DATA].selectedMovie;

export const getSelectedMovieReviews = (state) => state[NameSpace.DATA].selectedMovieReviews;

export const getGenre = (state) => state[NameSpace.DATA].genre;

export const getIsPromoLoadedFlag = (state) => state[NameSpace.DATA].isPromoLoaded;

export const getFavoriteMoviesSelector = createSelector(
    getMovies,
    (movies) => movies.filter((movie) => movie.is_favorite)
);

export const getMoviesByGenreSelector = createSelector(
    getMovies,
    getGenre,
    (movies, selectedGenre) => {
      if (selectedGenre !== DEFAULT_GENRE) {
        return movies.filter(({genre}) => genre === selectedGenre);
      }

      return movies;
    }
);

export const getSimilarMoviesSelector = createSelector(
    getMovies,
    getSelectedMovie,
    (movies, movie) => {
      if (movie) {
        const {id: clickedMovieId, genre: similarGenre} = movie;
        const allMoviesSameGenre = movies.filter(({id, genre}) => genre === similarGenre && id !== clickedMovieId);
        const similarMoviesToShow = allMoviesSameGenre.slice(0, AMOUNT_OF_SIMILAR_MOVIES);
        return similarMoviesToShow;
      }

      return undefined;
    }
);
