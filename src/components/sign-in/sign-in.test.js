import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {getStructureToRender} from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import SignIn from './sign-in';

it(`Should SignIn render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <SignIn />);
  render(structureToRender);

  expect(screen.getByLabelText(`Email address`)).toBeInTheDocument();
  expect(screen.getByLabelText(`Password`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `keks`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(`keks`)).toBeInTheDocument();
  expect(screen.getByDisplayValue(`123456`)).toBeInTheDocument();
});
