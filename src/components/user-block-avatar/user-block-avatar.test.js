import React from 'react';
import {AuthorizationStatus} from '../../utils/constatns';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import UserBlockAvatar from './user-block-avatar';
import {authInfoStructure} from '../../data-structure';

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);

it(`Should UserBlockAvatar render correctly`, () => {
  const store = mockStore({
    USER: {
      isAuthtorized: AuthorizationStatus.AUTHORIZED,
      user: authInfoStructure
    }
  });

  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <UserBlockAvatar />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();
});
