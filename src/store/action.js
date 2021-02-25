export const ActionType = {
  CHANGE_GENRE: `genres/changeGenre`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  })
};
