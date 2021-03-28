import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import NotFound from './not-found';

it(`Should NotFound render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <NotFound />);
  render(structureToRender);

  expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
});
