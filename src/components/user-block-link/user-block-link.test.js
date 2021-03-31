import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import UserBlockLink from './user-block-link';

it(`Should UserBlockLink render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <UserBlockLink />);
  render(structureToRender);

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});
