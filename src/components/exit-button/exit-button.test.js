import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import ExitButton from './exit-button';
import {getFakeStore} from '../../data-structure';

it(`Should ExitButton render correctly`, () => {
  const history = createMemoryHistory();
  const store = getFakeStore();

  jest.spyOn(redux, `useSelector`);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ExitButton />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Exit`)).toBeInTheDocument();
});
