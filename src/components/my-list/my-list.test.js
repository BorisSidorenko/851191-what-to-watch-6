import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, authInfoStructure} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import MyList from './my-list';
import {createAPI} from '../../api/api';
import rootReducer from '../../store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../utils/constatns';

const api = createAPI({});
const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
  preloadedState: {
    DATA: {
      selectedMovie: movieStructure,
      movies: [movieStructure]
    },
    USER: {
      isAuthtorized: AuthorizationStatus.AUTHORIZED,
      user: authInfoStructure
    }
  }
});

it(`Should MyList render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MY_LIST}`);

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <Switch>
            <PrivateRoute
              exact
              path={RoutePaths.MY_LIST}
              render={() => <MyList />}
            />
          </Switch>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`My list`)).toBeInTheDocument();
  expect(screen.getByText(`Catalog`)).toBeInTheDocument();
  expect(screen.getByText(`No movies to display.`)).toBeInTheDocument();
});
