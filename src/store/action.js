export const ActionType = {
  CHANGE_GENRE: `genres/changeGenre`,
  REQUIRED_AUTH: `user/requireAuthorization`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_PROMO: `data/loadPromo`
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
  loadPromo: (data) => ({
    type: ActionType.LOAD_PROMO,
    payload: data
  })
};
