import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import ExitButton from './exit-button';
import {RoutePaths} from '../../utils/constatns';

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);

it(`Should ExitButton render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    PLAYER: {
      requestedPlayerPath: RoutePaths.MAIN
    }
  });

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ExitButton />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Exit`)).toBeInTheDocument();
});
