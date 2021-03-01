export const ActionType = {
  CHANGE_GENRE: `genres/changeGenre`,
  REQUIRED_AUTH: `user/requireAuthorization`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  requireAuthorization: (isAuthtorized) => ({
    type: ActionType.REQUIRED_AUTH,
    payload: isAuthtorized
  })
};
