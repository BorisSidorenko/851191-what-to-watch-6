import {
  ActionType,
  playerMovieToPlayAction,
  playerMovieLoadedAction,
  playerMoviePlayAction,
  addRequestedPlayerPathAction,
  clearPlayerMovieToPlayAction
} from './action';
import {RoutePaths} from '../../utils/constatns';
import {movieStructure} from '../../utils/test-utils';

describe(`Actions creators for videoPlayer works as expected`, () => {
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

  it(`Action creater for setting requested path in player returns action with path payload`, () => {
    const expectedAction = {
      type: ActionType.VIDEO_PLAYER_REQUESTED_PATH,
      payload: RoutePaths.MAIN
    };

    expect(addRequestedPlayerPathAction(RoutePaths.MAIN)).toEqual(expectedAction);
  });

  it(`Action creater for clearing movie to play and returns action with empty movie to play`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_VIDEO_PLAYER_MOVIE
    };

    expect(clearPlayerMovieToPlayAction()).toEqual(expectedAction);
  });
});
