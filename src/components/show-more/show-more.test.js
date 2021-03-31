import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import ShowMore from './show-more';

it(`Should ShowMore render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <ShowMore onShowMoreClick={() => {}} />);
  render(structureToRender);

  expect(screen.getByText(/Show more/i)).toBeInTheDocument();
});
