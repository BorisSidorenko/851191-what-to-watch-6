import {
  ActionType,
  requireAuthorizationAction,
  addRequestedRouteAction,
  redirectToRouteAction,
  loginAction
} from './action';
import {AuthorizationStatus, RoutePaths} from '../../utils/constatns';
import {userStructure} from '../../utils/test-utils';

describe(`Actions creators for user works as expected`, () => {
  it(`Action creater for loggin in user returns action with user info payload`, () => {
    const expectedAction = {
      type: ActionType.LOGIN,
      payload: userStructure
    };

    expect(loginAction(userStructure)).toEqual(expectedAction);
  });

  it(`Action creater for checking authorization returns action with authorization status payload`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTH,
      payload: AuthorizationStatus.NOT_AUTHORIZED
    };

    expect(requireAuthorizationAction(AuthorizationStatus.NOT_AUTHORIZED)).toEqual(expectedAction);
  });

  it(`Action creater for adding requested route returns action with requested route payload`, () => {
    const expectedAction = {
      type: ActionType.ADD_REQUESTED_ROUTE,
      payload: RoutePaths.MAIN
    };

    expect(addRequestedRouteAction(RoutePaths.MAIN)).toEqual(expectedAction);
  });

  it(`Action creater for redirecting route returns action with redirect route payload`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: RoutePaths.MAIN
    };

    expect(redirectToRouteAction(RoutePaths.MAIN)).toEqual(expectedAction);
  });
});
