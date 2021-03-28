import MockAdapter from 'axios-mock-adapter';
import {createAPI, APIRoute} from '../../api/api';
import {user, initialState} from './user';
import {userStructure} from '../../utils/test-utils';
import {checkAuth, login} from '../../api/api-actions';
import {loginAction, requireAuthorizationAction, addRequestedRouteAction, redirectToRouteAction, ActionType} from '../action';
import {RoutePaths, AuthorizationStatus} from '../../utils/constatns';

const api = createAPI(() => {});

describe(`Reducers 'user' work as expected`, () => {
  it(`Reducer without parameters returns initial state`, () => {
    expect(user(undefined, {})).toEqual(initialState);
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

describe(`Async operation works as expected`, () => {
  it(`Should perform a success GET API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(requireAuthorizationAction(AuthorizationStatus.AUTHORIZED)).toEqual({
          type: ActionType.REQUIRED_AUTH,
          payload: AuthorizationStatus.AUTHORIZED,
        });
      });
  });

  it(`Should perform a failed API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(401, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(requireAuthorizationAction(AuthorizationStatus.NOT_AUTHORIZED)).toEqual({
          type: ActionType.REQUIRED_AUTH,
          payload: AuthorizationStatus.NOT_AUTHORIZED,
        });
      });
  });

  it(`Should perform a success POST API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `fake@user.com`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(loginAction(userStructure)).toEqual({
          type: ActionType.LOGIN,
          payload: userStructure
        });

        expect(redirectToRouteAction(RoutePaths.MAIN)).toEqual({
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: RoutePaths.MAIN
        });
      });
  });
});
