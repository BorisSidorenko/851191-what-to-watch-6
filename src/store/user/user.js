import {RoutePaths} from '../../utils/constatns';
import {ActionType} from '../../store/action';

const initialState = {
  user: null,
  isAuthtorized: null,
  requestedRoute: RoutePaths.MAIN
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case ActionType.REQUIRED_AUTH:
      return {
        ...state,
        isAuthtorized: action.payload
      };
    case ActionType.ADD_REQUESTED_ROUTE:
      return {
        ...state,
        requestedRoute: action.payload
      };
    default:
      return state;
  }
};
