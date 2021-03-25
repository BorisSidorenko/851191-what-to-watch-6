import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route, Switch} from 'react-router-dom';
import * as redux from 'react-redux';
import {AuthorizationStatus} from '../../utils/constatns';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {RoutePaths} from '../../utils/constatns';
import PrivateRoute from './private-route';

const mockStore = configureStore({});
let history;
const publicTitle = `Public Route`;
const privateTitle = `Private Route`;

describe(`Test Private route`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });

  it(`Should render public route when user is not authorized`, () => {
    const locationToPass = {
      location: {
        pathname: `/`
      }
    };
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path={RoutePaths.SIGN_IN}><h1>{publicTitle}</h1></Route>
              <PrivateRoute
                exact
                path={`/private`}
                render={() => <h1>{privateTitle}</h1>}
                location={locationToPass}
              />
            </Switch>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(publicTitle)).toBeInTheDocument();
    expect(screen.queryByText(privateTitle)).not.toBeInTheDocument();
  });

  it(`Should render private route when user is authorized`, () => {
    const locationToPass = {
      location: {
        pathname: `/`
      }
    };
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.AUTHORIZED
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path={RoutePaths.SIGN_IN}><h1>{publicTitle}</h1></Route>
              <PrivateRoute
                exact
                path={`/private`}
                render={() => <h1>{privateTitle}</h1>}
                location={locationToPass}
              />
            </Switch>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(privateTitle)).toBeInTheDocument();
    expect(screen.queryByText(publicTitle)).not.toBeInTheDocument();
  });
});
