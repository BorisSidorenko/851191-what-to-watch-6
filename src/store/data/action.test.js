import {
  ActionType,
  changeGenreAction,
  loadMoviesAction,
  loadMovieByIdAction,
  loadReviewsByMovieIdAction,
  clearSelectedMovieAction,
  loadPromoAction,
  clearIsPromoLoadedFlagAction,
  markMovieAsFavoriteAction,
} from './action';
import {DEFAULT_GENRE} from '../../utils/constatns';
import {movieStructure, reviewStructure} from '../../utils/test-utils';

describe(`Actions creators for data works as expected`, () => {
  it(`Action creater for loading promo movie returns action with movie payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO,
      payload: movieStructure
    };

    expect(loadPromoAction(movieStructure)).toEqual(expectedAction);
  });

  it(`Action creater for clear loading promo flag returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_IS_PROMO_LOADDED_FLAG
    };

    expect(clearIsPromoLoadedFlagAction()).toEqual(expectedAction);
  });

  it(`Action creater for loading movies returns action with array of movies payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_MOVIES,
      payload: [movieStructure]
    };

    expect(loadMoviesAction([movieStructure])).toEqual(expectedAction);
  });

  it(`Action creater for loading movie by id returns action with movie payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_MOVIE_BY_ID,
      payload: movieStructure
    };

    expect(loadMovieByIdAction(movieStructure)).toEqual(expectedAction);
  });

  it(`Action creater for loading reviews by movie id returns action with array of reviews payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS_BY_ID,
      payload: [reviewStructure]
    };

    expect(loadReviewsByMovieIdAction([reviewStructure])).toEqual(expectedAction);
  });

  it(`Action creater for clearing selected movie returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_SELECTED_MOVIE,
    };

    expect(clearSelectedMovieAction()).toEqual(expectedAction);
  });

  it(`Action creater for changing genre returns action with genre payload`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: DEFAULT_GENRE
    };

    expect(changeGenreAction(DEFAULT_GENRE)).toEqual(expectedAction);
  });

  it(`Action creater for making movie as favorite returns action with movie payload`, () => {
    const expectedAction = {
      type: ActionType.MARK_MOVIE_AS_FAVORITE,
      payload: movieStructure
    };

    expect(markMovieAsFavoriteAction(movieStructure)).toEqual(expectedAction);
  });
});
