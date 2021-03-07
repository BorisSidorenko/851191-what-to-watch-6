export const ActionType = {
  CHANGE_GENRE: `genres/changeGenre`,
  LOGIN: `user/login`,
  REQUIRED_AUTH: `user/requireAuthorization`,
  ADD_REQUESTED_ROUTE: `user/addRequestedRoute`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_MOVIE_BY_ID: `data/loadMovieById`,
  LOAD_REVIEWS_BY_ID: `data/loadReviewsByMovieId`,
  LOAD_PROMO: `data/loadPromo`,
  CLEAR_SELECTED_MOVIE: `data/clearSelectedMovie`,
  CLEAR_SELECTED_MOVIE_REVIEWS: `data/clearSelectedMovieReviews`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  requireAuthorization: (isAuthtorized) => ({
    type: ActionType.REQUIRED_AUTH,
    payload: isAuthtorized
  }),
  loadMovies: (data) => ({
    type: ActionType.LOAD_MOVIES,
    payload: data
  }),
  loadMovieById: (data) => ({
    type: ActionType.LOAD_MOVIE_BY_ID,
    payload: data
  }),
  loadReviewsByMovieId: (data) => ({
    type: ActionType.LOAD_REVIEWS_BY_ID,
    payload: data
  }),
  clearSelectedMovie: (data) => ({
    type: ActionType.CLEAR_SELECTED_MOVIE,
    payload: data
  }),
  clearSelectedMovieReviews: (data) => ({
    type: ActionType.CLEAR_SELECTED_MOVIE_REVIEWS,
    payload: data
  }),
  loadPromo: (data) => ({
    type: ActionType.LOAD_PROMO,
    payload: data
  }),
  addRequestedRoute: (data) => ({
    type: ActionType.ADD_REQUESTED_ROUTE,
    payload: data
  }),
  redirectToRoute: (data) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: data
  }),
  login: (data) => ({
    type: ActionType.LOGIN,
    payload: data
  })
};
