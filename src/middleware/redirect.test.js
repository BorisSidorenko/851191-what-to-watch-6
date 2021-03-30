import {redirect} from './redirect';
import {redirectToRouteAction} from '../store/user/action';
import {RoutePaths} from '../utils/constatns';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`../browser-history`, () => fakeHistory);

describe(`Redirect middleware works as expected`, () => {
  it(`Action passes to next middleware`, () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRouteAction(RoutePaths.MAIN);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Redirect route should be added to fakeHostory`, () => {
    const {invoke} = mockRedux();

    invoke(redirectToRouteAction(RoutePaths.MAIN));
    expect(fakeHistory.location.pathname).toBe(RoutePaths.MAIN);

    invoke(redirectToRouteAction(RoutePaths.MOVIE_PAGE));
    expect(fakeHistory.location.pathname).toBe(RoutePaths.MOVIE_PAGE);
  });

  it(`No redirect bacause of wrong action`, () => {
    const testUrl = `/test`;
    const {invoke} = mockRedux();
    invoke({type: `test`, payload: testUrl});
    expect(fakeHistory.location.pathname).not.toBe(testUrl);
  });
});
