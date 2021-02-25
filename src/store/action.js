export const ActionType = {
  CHANGE_GENRE: `genres/changeGenre`,
  LOAD_MOVIE_LIST: `movies/getMovies`,
  LOAD_SIMILAR_MOVIE_LIST: `movies/getSimilarMovies`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadMovieList: () => ({
    type: ActionType.LOAD_MOVIE_LIST,
  }),
  loadSimilarMovies: (param) => ({
    type: ActionType.LOAD_SIMILAR_MOVIE_LIST,
    payload: param
  }),
};
