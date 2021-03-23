import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import UserBlockLink from './user-block-link';

it(`Should UserBlockLink render correctly`, () => {
  const history = createMemoryHistory();

  const {getByText} = render(
      <Router history={history}>
        <UserBlockLink />
      </Router>
  );

  const textElement = getByText(`Sign in`);

  expect(textElement).toBeInTheDocument();
});
