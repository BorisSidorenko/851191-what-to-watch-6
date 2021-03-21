import React from 'react';
import {render} from '@testing-library/react';
import ShowMore from './show-more';

it(`Should ShowMore render correctly`, () => {
  const {getByText} = render(<ShowMore onShowMoreClick={() => {}}/>);

  const textElement = getByText(`Show more`);

  expect(textElement).toBeInTheDocument();
});
