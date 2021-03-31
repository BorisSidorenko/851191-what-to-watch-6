import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import RatingInput from './rating-input';

it(`Should RatingInput render correctly`, () => {
  const history = createMemoryHistory();

  const props = {
    value: 1,
    onRatingChange: () => {}
  };

  const structureToRender = getStructureToRender(history, <RatingInput {...props} />);
  render(structureToRender);

  userEvent.type(screen.getByTestId(`rating`), 1);
});
