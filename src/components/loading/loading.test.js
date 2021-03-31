import React from 'react';
import {render, screen} from '@testing-library/react';
import {getStructureToRender} from '../../utils/test-utils';
import {createMemoryHistory} from 'history';
import Loading from './loading';

it(`Should Loading render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <Loading />);
  render(structureToRender);

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
