import {NameSpace} from '../root-reducer';


export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getSelectedMovie = (state) => state[NameSpace.DATA].selectedMovie;

export const getSelectedMovieReviews = (state) => state[NameSpace.DATA].selectedMovieReviews;

export const getGenre = (state) => state[NameSpace.DATA].genre;

export const getIsPromoLoadedFlag = (state) => state[NameSpace.DATA].isPromoLoaded;
