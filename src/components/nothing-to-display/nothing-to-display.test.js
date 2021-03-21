import React from 'react';
import {render} from '@testing-library/react';
import NothingToDisplay from './nothing-to-display';

it(`Should NothingToDisplay render correctly`, () => {
  const {getByText} = render(<NothingToDisplay />);

  const textElement = getByText(`No movies to display.`);

  expect(textElement).toBeInTheDocument();
});
