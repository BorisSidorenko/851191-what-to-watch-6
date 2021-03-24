import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {AuthorizationStatus} from '../../utils/constatns';
import {createMemoryHistory} from 'history';
import {authInfoStructure} from '../../data-structure';
import NotFound from './not-found';

const mockStore = configureStore({});

it(`Should NotFound render correctly`, () => {
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
          <NotFound />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`404 Not Found`)).toBeInTheDocument();
});
