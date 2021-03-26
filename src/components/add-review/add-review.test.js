import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, authInfoStructure} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import AddReview from './add-review';
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
      selectedMovie: movieStructure
    },
    USER: {
      isAuthtorized: AuthorizationStatus.AUTHORIZED,
      user: authInfoStructure
    }
  }
});

it(`Should AddReview render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}${RoutePaths.REVIEW}`);

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <Switch>
            <PrivateRoute
              exact
              path={`${RoutePaths.MOVIE_PAGE}/:id${RoutePaths.REVIEW}`}
              render={() => <AddReview />}
            />
          </Switch>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`WTW`)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
  expect(screen.getByText(`Add review`)).toBeInTheDocument();
  expect(screen.getByText(`Rating 1`)).toBeInTheDocument();
  expect(screen.getByRole(`button`)).toBeInTheDocument();
  expect(screen.getByText(`Post`)).toBeInTheDocument();
});
