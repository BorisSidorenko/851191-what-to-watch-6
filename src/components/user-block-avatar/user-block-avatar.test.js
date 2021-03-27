import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import UserBlockAvatar from './user-block-avatar';
import {authInfoStructure, getFakeStore} from '../../data-structure';

it(`Should UserBlockAvatar render correctly`, () => {
  const store = getFakeStore();
  const history = createMemoryHistory();

  jest.spyOn(redux, `useSelector`);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <UserBlockAvatar />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();
});
