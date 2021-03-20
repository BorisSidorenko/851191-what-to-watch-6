import {data, initialState} from './data';
import {movieStructure, reviewStructure} from '../../data-structure';
import {
  loadPromoAction,
  clearIsPromoLoadedFlagAction,
  loadMoviesAction,
  loadMovieByIdAction,
  loadReviewsByMovieIdAction,
  clearSelectedMovieAction,
  changeGenreAction,
  markMovieAsFavoriteAction
} from '../action';

describe(`Reducers work as expected`, () => {
  it(`Reducer without parameters returns initial state`, () => {
    expect(data(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should add promo movie`, () => {
    expect(data(initialState, loadPromoAction(movieStructure))).toEqual({
      ...initialState,
      selectedMovie: movieStructure,
      isPromoLoaded: true
    });
  });

  it(`Reducer should clear promo flag and return initial state`, () => {
    const state = {
      ...initialState,
      isPromoLoaded: true
    };

    expect(data(state, clearIsPromoLoadedFlagAction())).toEqual(initialState);
  });

  it(`Reducer should add array of movies`, () => {
    expect(data(initialState, loadMoviesAction([movieStructure]))).toEqual({
      ...initialState,
      movies: [movieStructure]
    });
  });

  it(`Reducer should add movie to selected movie`, () => {
    expect(data(initialState, loadMovieByIdAction(movieStructure))).toEqual({
      ...initialState,
      selectedMovie: movieStructure
    });
  });

  it(`Reducer should add array of reviews`, () => {
    expect(data(initialState, loadReviewsByMovieIdAction([reviewStructure]))).toEqual({
      ...initialState,
      selectedMovieReviews: [reviewStructure]
    });
  });

  it(`Reducer should clear selected movie and return initial state`, () => {
    const state = {
      ...initialState,
      selectedMovie: movieStructure
    };

    expect(data(state, clearSelectedMovieAction())).toEqual(initialState);
  });

  it(`Reducer should change genre and return state with new genre`, () => {
    const testGenre = `Drama`;

    expect(data(initialState, changeGenreAction(testGenre))).toEqual({
      ...initialState,
      genre: testGenre
    });
  });

  it(`Reducer should add movie to selected movie`, () => {
    expect(data(initialState, markMovieAsFavoriteAction(movieStructure))).toEqual({
      ...initialState,
      selectedMovie: movieStructure
    });
  });
});
