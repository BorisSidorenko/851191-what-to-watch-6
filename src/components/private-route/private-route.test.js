import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {AuthorizationStatus} from '../../utils/constatns';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {getStructureToRender} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import PrivateRoute from './private-route';

let history;
const publicTitle = `Public Route`;
const privateTitle = `Private Route`;

describe(`Test Private route`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });

  it(`Should render public route when user is not authorized`, () => {
    const mockStore = configureStore({});
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED
      }
    });

    const structureToRender = getStructureToRender(
        history,
        <Switch>
          <Route exact path={RoutePaths.SIGN_IN}><h1>{publicTitle}</h1></Route>
          <PrivateRoute
            exact
            path={`/private`}
            render={() => <h1>{privateTitle}</h1>}
          />
        </Switch>,
        store
    );

    render(structureToRender);

    expect(screen.getByText(publicTitle)).toBeInTheDocument();
    expect(screen.queryByText(privateTitle)).not.toBeInTheDocument();
  });

  it(`Should render private route when user is authorized`, () => {
    const structureToRender = getStructureToRender(
        history,
        <Switch>
          <Route exact path={RoutePaths.SIGN_IN}><h1>{publicTitle}</h1></Route>
          <PrivateRoute
            exact
            path={`/private`}
            render={() => <h1>{privateTitle}</h1>}
          />
        </Switch>
    );

    render(structureToRender);

    expect(screen.getByText(privateTitle)).toBeInTheDocument();
    expect(screen.queryByText(publicTitle)).not.toBeInTheDocument();
  });
});
