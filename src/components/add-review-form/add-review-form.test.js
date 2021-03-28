import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import AddReviewForm from './add-review-form';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';

it(`Should AddReviewForm render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <AddReviewForm id={movieStructure.id}/>);
  render(structureToRender);

  expect(screen.getByTestId(`comment`)).toBeInTheDocument();
  expect(screen.getByText(`Post`)).toBeInTheDocument();
});
