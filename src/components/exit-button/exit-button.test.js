import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import ExitButton from './exit-button';
import {getStructureToRender} from '../../utils/test-utils';

it(`Should ExitButton render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <ExitButton />);
  render(structureToRender);

  expect(screen.getByText(/Exit/i)).toBeInTheDocument();
});
