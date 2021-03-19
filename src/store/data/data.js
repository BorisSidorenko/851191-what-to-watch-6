import {DEFAULT_GENRE} from '../../utils/constatns';
import {loadPromoAction, clearIsPromoLoadedFlagAction, loadMoviesAction, loadMovieByIdAction, loadReviewsByMovieIdAction, clearSelectedMovieAction, changeGenreAction, markMovieAsFavoriteAction} from '../../store/action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  selectedMovie: null,
  selectedMovieReviews: [],
  genre: DEFAULT_GENRE,
  isPromoLoaded: false
};

export const data = createReducer(initialState, (builder) => {
  builder.addCase(loadPromoAction, (state, action) => {
    state.selectedMovie = action.payload;
    state.isPromoLoaded = true;
  });
  builder.addCase(clearIsPromoLoadedFlagAction, (state) => {
    state.isPromoLoaded = initialState.isPromoLoaded;
  });
  builder.addCase(loadMoviesAction, (state, action) => {
    state.movies = action.payload;
  });
  builder.addCase(loadMovieByIdAction, (state, action) => {
    state.selectedMovie = action.payload;
  });
  builder.addCase(loadReviewsByMovieIdAction, (state, action) => {
    state.selectedMovieReviews = action.payload;
  });
  builder.addCase(clearSelectedMovieAction, (state) => {
    state.selectedMovie = initialState.selectedMovie;
  });
  builder.addCase(changeGenreAction, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(markMovieAsFavoriteAction, (state, action) => {
    state.selectedMovie = action.payload;
  });
});
