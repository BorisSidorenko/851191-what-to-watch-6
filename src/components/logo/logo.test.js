import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {movieStructure} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import Logo from './logo';

it(`Should Logo render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  render(
      <Router history={history}>
        <Logo />
      </Router>
  );

  expect(screen.getByRole(`link`)).toBeInTheDocument();
});
