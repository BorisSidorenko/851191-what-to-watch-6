export const ActionType = {
  CHANGE_GENRE: `genres/changeGenre`,
  LOAD_MOVIE_LIST: `movies/getMovies`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadMovieList: () => ({
    type: ActionType.LOAD_MOVIE_LIST,
  })
};
