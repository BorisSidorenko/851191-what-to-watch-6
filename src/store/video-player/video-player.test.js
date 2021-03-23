import {videoPlayer, initialState} from './video-player';
import {movieStructure} from '../../data-structure';
import {playerMovieToPlayAction, addRequestedPlayerPathAction, playerMovieLoadedAction, playerMoviePlayAction} from '../action';
import {RoutePaths} from '../../utils/constatns';

describe(`Reducers work as expected`, () => {
  it(`Reducer without parameters returns initial state`, () => {
    expect(videoPlayer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should return state with movie to play`, () => {
    expect(videoPlayer(initialState, playerMovieToPlayAction(movieStructure))).toEqual({
      ...initialState,
      movieToPlay: movieStructure
    });
  });

  it(`Reducer should return state with requested path`, () => {
    expect(videoPlayer(initialState, addRequestedPlayerPathAction(RoutePaths.MAIN))).toEqual({
      ...initialState,
      requestedPlayerPath: RoutePaths.MAIN
    });
  });

  it(`Reducer should return state with isLoading flag`, () => {
    expect(videoPlayer(initialState, playerMovieLoadedAction())).toEqual({
      ...initialState,
      isLoading: false
    });
  });

  it(`Reducer should return state with isPlaying flag`, () => {
    expect(videoPlayer(initialState, playerMoviePlayAction(true))).toEqual({
      ...initialState,
      isPlaying: true
    });

    expect(videoPlayer(initialState, playerMoviePlayAction(false))).toEqual(initialState);
  });
});
