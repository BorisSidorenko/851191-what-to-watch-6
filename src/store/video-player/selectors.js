import {NameSpace} from '../root-reducer';

export const getMovieToPlay = (state) =>state[NameSpace.PLAYER].movieToPlay;

export const isLoading = (state) => state[NameSpace.PLAYER].isLoading;

export const isPlaying = (state) => state[NameSpace.PLAYER].isPlaying;
