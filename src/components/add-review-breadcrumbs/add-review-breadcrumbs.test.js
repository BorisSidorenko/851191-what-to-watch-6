import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AddReviewBreadcrumbs from './add-review-breadcrumbs';

it(`Should AddReviewBreadcrumbs render correctly`, () => {
  const history = createMemoryHistory();
  const props = {name: `test`, id: 1};

  const {getByText} = render(
      <Router history={history}>
        <AddReviewBreadcrumbs {...props}/>
      </Router>
  );

  const breadcrumbsLink = getByText(props.name);
  const linkElement = getByText(`Add review`);

  expect(breadcrumbsLink).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
