import React from 'react';
import {render, screen} from '@testing-library/react';
import {Switch} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import MyList from './my-list';

it(`Should MyList render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MY_LIST}`);

  const structureToRender = getStructureToRender(
      history,
      <Switch>
        <PrivateRoute
          exact
          path={RoutePaths.MY_LIST}
          render={() => <MyList />}
        />
      </Switch>
  );

  render(structureToRender);

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  expect(screen.getByText(/No movies to display./i)).toBeInTheDocument();
});
