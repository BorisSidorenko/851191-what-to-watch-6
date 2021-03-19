import {combineReducers} from 'redux';
import {data} from '../store/data/data';
import {user} from '../store/user/user';
import {videoPlayer} from '../store/video-player/video-player';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  PLAYER: `PLAYER`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.PLAYER]: videoPlayer,
});
