import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import SignIn from './sign-in';

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);
it(`Should SignIn render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    USER: {
      requestedRoute: `/`
    }
  });

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByLabelText(`Email address`)).toBeInTheDocument();
  expect(screen.getByLabelText(`Password`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `keks`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(`keks`)).toBeInTheDocument();
  expect(screen.getByDisplayValue(`123456`)).toBeInTheDocument();
});
