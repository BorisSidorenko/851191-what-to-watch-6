import MockAdapter from 'axios-mock-adapter';
import {createAPI, APIRoute} from '../../api/api';
import {data, initialState} from './data';
import {movieStructure, reviewStructure} from '../../data-structure';
import {
  ActionType,
  loadPromoAction,
  clearIsPromoLoadedFlagAction,
  loadMoviesAction,
  loadMovieByIdAction,
  loadReviewsByMovieIdAction,
  clearSelectedMovieAction,
  changeGenreAction,
  markMovieAsFavoriteAction
} from '../action';
import {loadPromoMovie, loadMovieList, loadMovieById, loadReviewsByMovieId, addReview, addMovieToFavorite} from '../../api/api-actions';

const api = createAPI(() => {});

describe(`Reducers work as expected`, () => {
  it(`Reducer without parameters returns initial state`, () => {
    expect(data(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should clear promo flag and return initial state`, () => {
    const state = {
      ...initialState,
      isPromoLoaded: true
    };

    expect(data(state, clearIsPromoLoadedFlagAction())).toEqual(initialState);
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
});

describe(`Async operation works as expected`, () => {
  it(`Should perform a success GET API call to /promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = loadPromoMovie();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, [{fake: true}]);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(loadPromoAction(movieStructure)).toEqual({
          type: ActionType.LOAD_PROMO,
          payload: movieStructure
        });
      });
  });

  it(`Should perform a success GET API call to /movies`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieListLoader = loadMovieList();

    apiMock
      .onGet(APIRoute.MOVIES)
      .reply(200, [{fake: true}]);

    return movieListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(loadMoviesAction([movieStructure])).toEqual({
          type: ActionType.LOAD_MOVIES,
          payload: [movieStructure]
        });
      });
  });

  it(`Should perform a success GET API call to /movies/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieId = 1;
    const movieByIdLoader = loadMovieById(movieId);

    apiMock
      .onGet(`${APIRoute.MOVIES}/${movieId}`)
      .reply(200, [{fake: true}]);

    return movieByIdLoader(dispatch, () => {}, api)
      .then(() => {
        expect(loadMovieByIdAction(movieStructure)).toEqual({
          type: ActionType.LOAD_MOVIE_BY_ID,
          payload: movieStructure
        });
      });
  });

  it(`Should perform a success GET API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieId = 1;
    const reviewsByIdLoader = loadReviewsByMovieId(movieId);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${movieId}`)
      .reply(200, [{fake: true}]);

    return reviewsByIdLoader(dispatch, () => {}, api)
      .then(() => {
        expect(loadReviewsByMovieIdAction([reviewStructure])).toEqual({
          type: ActionType.LOAD_REVIEWS_BY_ID,
          payload: [reviewStructure]
        });
      });
  });

  it(`Should perform a success POST API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieId = 1;
    const review = {rating: 10, comment: `test`};
    const reviewLoader = addReview(movieId, review);

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${movieId}`)
      .reply(200, [{fake: true}]);

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(loadReviewsByMovieIdAction([reviewStructure])).toEqual({
          type: ActionType.LOAD_REVIEWS_BY_ID,
          payload: [reviewStructure]
        });
      });
  });

  it(`Should perform a success POST API call to /favorite/:id/`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieId = 1;
    let isFavorite = 1;
    const addToFavoriteLoader = addMovieToFavorite(movieId, isFavorite);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${movieId}/${isFavorite}`)
      .reply(200, [{fake: true}]);

    return addToFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(markMovieAsFavoriteAction(movieStructure)).toEqual({
          type: ActionType.MARK_MOVIE_AS_FAVORITE,
          payload: movieStructure
        });
      });
  });
});
