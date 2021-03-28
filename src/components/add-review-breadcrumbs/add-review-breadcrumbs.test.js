import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import AddReviewBreadcrumbs from './add-review-breadcrumbs';

it(`Should AddReviewBreadcrumbs render correctly`, () => {
  const history = createMemoryHistory();
  const props = {name: `test`, id: 1};

  const structureToRender = getStructureToRender(history, <AddReviewBreadcrumbs {...props}/>);
  render(structureToRender);

  expect(screen.getByText(props.name)).toBeInTheDocument();
  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
});
