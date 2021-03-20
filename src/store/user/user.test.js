import {user, initialState} from './user';
import {userStructure} from '../../data-structure';
import {loginAction, requireAuthorizationAction, addRequestedRouteAction} from '../action';
import {RoutePaths} from '../../utils/constatns';

describe(`Reducers work as expected`, () => {
  it(`Reducer without parameters returns initial state`, () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should return state with user info`, () => {
    expect(user(initialState, loginAction(userStructure))).toEqual({
      ...initialState,
      user: userStructure
    });
  });

  it(`Reducer should return state with isAuthorized flag`, () => {
    expect(user(initialState, requireAuthorizationAction(true))).toEqual({
      ...initialState,
      isAuthtorized: true
    });

    expect(user(initialState, requireAuthorizationAction(false))).toEqual({
      ...initialState,
      isAuthtorized: false
    });
  });

  it(`Reducer should return state with requested route`, () => {
    expect(user(initialState, addRequestedRouteAction(RoutePaths.MAIN))).toEqual({
      ...initialState,
      requestedRoute: RoutePaths.MAIN
    });

    expect(user(initialState, addRequestedRouteAction(RoutePaths.MOVIE_DETAILS))).toEqual({
      ...initialState,
      requestedRoute: RoutePaths.MOVIE_DETAILS
    });
  });
});
