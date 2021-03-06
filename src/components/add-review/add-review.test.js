import React from 'react';
import {render, screen} from '@testing-library/react';
import {Switch} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import {createMemoryHistory} from 'history';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import AddReview from './add-review';

it(`Should AddReview render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}${RoutePaths.REVIEW}`);

  const structureToRender = getStructureToRender(
      history,
      <Switch>
        <PrivateRoute
          exact
          path={`${RoutePaths.MOVIE_PAGE}/:id${RoutePaths.REVIEW}`}
          render={() => <AddReview />}
        />
      </Switch>
  );

  render(structureToRender);

  expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  expect(screen.getByText(movieStructure.name)).toBeInTheDocument();
  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  expect(screen.getAllByTestId(`rating`)).toHaveLength(10);
  expect(screen.getByTestId(`comment`)).toBeInTheDocument();
  expect(screen.getByRole(`button`)).toBeInTheDocument();
  expect(screen.getByText(/Post/i)).toBeInTheDocument();
});
