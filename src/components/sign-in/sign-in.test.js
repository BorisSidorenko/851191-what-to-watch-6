import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender, authInfoStructure} from '../../utils/test-utils';
import {AuthorizationStatus, RoutePaths} from '../../utils/constatns';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import SignIn from './sign-in';

describe(`SingIn works correctly`, () => {
  it(`Should render MAIN when user is authorized and navigates to '/login' url`, () => {
    const history = createMemoryHistory();
    const title = `Not SignIn Page`;

    const structureToRender = getStructureToRender(
        history,
        <Switch>
          <Route exact path={RoutePaths.MAIN}><h1>{title}</h1></Route>
          <Route exact path={RoutePaths.SIGN_IN}>
            <SignIn />
          </Route>
        </Switch>,
    );
    render(structureToRender);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it(`Should render SignIn when user is not authorized`, () => {
    const mockStore = configureStore({});
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED,
        user: authInfoStructure
      }
    });

    const history = createMemoryHistory();

    const structureToRender = getStructureToRender(history, <SignIn />, store);
    render(structureToRender);

    expect(screen.getByLabelText(`Email address`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`email`), `keks`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(`keks`)).toBeInTheDocument();
    expect(screen.getByDisplayValue(`123456`)).toBeInTheDocument();
  });
});
