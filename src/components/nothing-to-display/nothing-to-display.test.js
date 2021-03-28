import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import NothingToDisplay from './nothing-to-display';

it(`Should NothingToDisplay render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <NothingToDisplay />);
  render(structureToRender);

  expect(screen.getByText(/No movies to display./i)).toBeInTheDocument();
});
