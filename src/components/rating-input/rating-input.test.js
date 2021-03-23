import React from 'react';
import {render, screen} from '@testing-library/react';
import RatingInput from './rating-input';
import userEvent from '@testing-library/user-event';

it(`Should RatingInput render correctly`, () => {
  const props = {
    value: 1,
    onRatingChange: () => {}
  };

  render(<RatingInput {...props} />);

  userEvent.type(screen.getByTestId(`rating`), 1);
});
