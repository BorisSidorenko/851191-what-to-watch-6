import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {getFakeStore} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import MyList from './my-list';

it(`Should MyList render correctly`, () => {
  const fakeStore = getFakeStore();

  const history = createMemoryHistory();
  history.push(`${RoutePaths.MY_LIST}`);

  render(
      <redux.Provider store={fakeStore}>
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

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  expect(screen.getByText(/No movies to display./i)).toBeInTheDocument();
});
