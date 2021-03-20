import {
  ActionType,
  changeGenreAction,
  requireAuthorizationAction,
  loadMoviesAction,
  loadMovieByIdAction,
  loadReviewsByMovieIdAction,
  clearSelectedMovieAction,
  loadPromoAction,
  clearIsPromoLoadedFlagAction,
  addRequestedRouteAction,
  redirectToRouteAction,
  loginAction,
  markMovieAsFavoriteAction,
  playerMovieToPlayAction,
  playerMovieLoadedAction,
  playerMoviePlayAction,
  playerMoviePauseAction,
  addRequestedPlayerPathAction
} from './action';
import {DEFAULT_GENRE, AuthorizationStatus, RoutePaths} from '../utils/constatns';

const movieStructure = {
  "name": ``,
  "poster_image": ``,
  "preview_image": ``,
  "background_image": ``,
  "background_color": ``,
  "description": ``,
  "rating": ``,
  "scores_count": ``,
  "director": ``,
  "starring": [``],
  "run_time": ``,
  "genre": ``,
  "released": ``,
  "id": 1,
  "is_favorite": false,
  "video_link": ``,
  "preview_video_link": ``
};

const reviewStructure = {
  "id": 1,
  "user": {
    "id": 1,
    "name": ``
  },
  "rating": 1,
  "comment": ``,
  "date": ``
};

const userStructure = {
  "email": ``,
  "password": ``
};

describe(`Actions creators works as expected`, () => {
  it(`Action creater for changing genre returns action with genre payload`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: DEFAULT_GENRE
    };

    expect(changeGenreAction(DEFAULT_GENRE)).toEqual(expectedAction);
  });

  it(`Action creater for checking authorization returns action with authorization status payload`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTH,
      payload: AuthorizationStatus.NOT_AUTHORIZED
    };

    expect(requireAuthorizationAction(AuthorizationStatus.NOT_AUTHORIZED)).toEqual(expectedAction);
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

  it(`Action creater for adding requested route returns action with requested route payload`, () => {
    const expectedAction = {
      type: ActionType.ADD_REQUESTED_ROUTE,
      payload: RoutePaths.MAIN
    };

    expect(addRequestedRouteAction(RoutePaths.MAIN)).toEqual(expectedAction);
  });

  it(`Action creater for redirecting route returns action with redirect route payload`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: RoutePaths.MAIN
    };

    expect(redirectToRouteAction(RoutePaths.MAIN)).toEqual(expectedAction);
  });

  it(`Action creater for loggin in user returns action with user info payload`, () => {
    const expectedAction = {
      type: ActionType.LOGIN,
      payload: userStructure
    };

    expect(loginAction(userStructure)).toEqual(expectedAction);
  });

  it(`Action creater for making movie as favorite returns action with movie payload`, () => {
    const expectedAction = {
      type: ActionType.MARK_MOVIE_AS_FAVORITE,
      payload: movieStructure
    };

    expect(markMovieAsFavoriteAction(movieStructure)).toEqual(expectedAction);
  });

  it(`Action creater for setting movie to play returns action with movie payload`, () => {
    const expectedAction = {
      type: ActionType.VIDEO_PLAYER_MOVIE,
      payload: movieStructure
    };

    expect(playerMovieToPlayAction(movieStructure)).toEqual(expectedAction);
  });

  it(`Action creater for setting movie to play is loaded flag returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.VIDEO_PLAYER_LOADED
    };

    expect(playerMovieLoadedAction()).toEqual(expectedAction);
  });

  it(`Action creater for setting movie to play is playing flag returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.VIDEO_PLAYER_PLAYING
    };

    expect(playerMoviePlayAction()).toEqual(expectedAction);
  });

  it(`Action creater for setting movie to play is paused flag returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.VIDEO_PLAYER_PAUSE
    };

    expect(playerMoviePauseAction()).toEqual(expectedAction);
  });

  it(`Action creater for setting requested path in player returns action with path payload`, () => {
    const expectedAction = {
      type: ActionType.VIDEO_PLAYER_REQUESTED_PATH,
      payload: RoutePaths.MAIN
    };

    expect(addRequestedPlayerPathAction(RoutePaths.MAIN)).toEqual(expectedAction);
  });
});
