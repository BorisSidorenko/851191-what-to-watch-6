import React from 'react';
import {render} from '@testing-library/react';
import AuthCheck from './auth-check';

it(`Should AuthCheck render correctly`, () => {
  const {getByText} = render(<AuthCheck />);

  const textElement = getByText(`Checking auth...`);

  expect(textElement).toBeInTheDocument();
});
