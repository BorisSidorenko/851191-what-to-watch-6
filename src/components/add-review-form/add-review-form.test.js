import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import AddReviewForm from './add-review-form';
import {movieStructure} from '../../data-structure';

const mockStore = configureStore({});

jest.spyOn(redux, `useDispatch`);

it(`Should AddReviewForm render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <AddReviewForm id={movieStructure.id}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`comment`)).toBeInTheDocument();
  expect(screen.getByText(`Post`)).toBeInTheDocument();
});