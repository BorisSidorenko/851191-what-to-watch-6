import React from 'react';
import {AuthorizationStatus} from '../../utils/constatns';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import UserBlock from './user-block';

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);

describe(`UserBlock component works as expected`, () => {
  it(`Should UserBlock render correctly with user avatar`, () => {
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.AUTHORIZED,
        user: {
          "avatar_url": ``,
          "name": `User name`
        }
      }
    });

    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByAltText(`User name`)).toBeInTheDocument();
  });

  it(`Should UserBlock render correctly w/o user avatar`, () => {
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED,
        user: {
          "avatar_url": ``,
          "name": `User name`
        }
      }
    });

    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });
});
