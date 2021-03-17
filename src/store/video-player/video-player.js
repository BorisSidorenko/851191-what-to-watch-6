import {ActionType} from '../../store/action';

const initialState = {
  movieToPlay: null,
  isLoading: true,
  isPlaying: false
};

export const videoPlayer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.VIDEO_PLAYER_MOVIE:
      return {
        ...state,
        movieToPlay: action.payload
      };
    case ActionType.VIDEO_PLAYER_LOADED:
      return {
        ...state,
        isLoading: false
      };
    case ActionType.VIDEO_PLAYER_PLAYING:
      return {
        ...state,
        isPlaying: true
      };
    case ActionType.VIDEO_PLAYER_PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    default:
      return state;
  }
};
