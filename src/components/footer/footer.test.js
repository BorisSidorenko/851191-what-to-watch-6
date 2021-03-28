import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import Footer from './footer';

it(`Should Footer render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <Footer />);
  render(structureToRender);

  expect(screen.getByText(/What to watch Ltd./i)).toBeInTheDocument();
});
