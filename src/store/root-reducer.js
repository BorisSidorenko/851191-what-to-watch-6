import {combineReducers} from 'redux';
import {data} from '../store/data/data';
import {user} from '../store/user/user';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
