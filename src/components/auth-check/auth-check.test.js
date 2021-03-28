import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import AuthCheck from './auth-check';

it(`Should AuthCheck render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <AuthCheck />);
  render(structureToRender);

  expect(screen.getByText(/Checking auth/i)).toBeInTheDocument();
});
