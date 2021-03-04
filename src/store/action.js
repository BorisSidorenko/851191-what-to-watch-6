export const ActionType = {
  CHANGE_GENRE: `genres/changeGenre`,
  REQUIRED_AUTH: `user/requireAuthorization`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_MOVIE_BY_ID: `data/loadMovieById`,
  LOAD_PROMO: `data/loadPromo`,
  CLEAR_SELECTED_MOVIE: `data/clearSelectedMovie`
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
  clearSelectedMovie: (data) => ({
    type: ActionType.CLEAR_SELECTED_MOVIE,
    payload: data
  }),
  loadPromo: (data) => ({
    type: ActionType.LOAD_PROMO,
    payload: data
  })
};
