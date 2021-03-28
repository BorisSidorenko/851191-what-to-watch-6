import React from 'react';
import {AuthorizationStatus} from '../../utils/constatns';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import UserBlock from './user-block';
import {authInfoStructure, getStructureToRender} from '../../utils/test-utils';

const mockStore = configureStore({});

describe(`UserBlock component works as expected`, () => {
  it(`Should UserBlock render correctly with user avatar`, () => {
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.AUTHORIZED,
        user: authInfoStructure
      }
    });

    const history = createMemoryHistory();

    const structureToRender = getStructureToRender(history, <UserBlock />, store);
    render(structureToRender);

    expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();
  });

  it(`Should UserBlock render correctly w/o user avatar`, () => {
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED,
        user: authInfoStructure
      }
    });

    const history = createMemoryHistory();

    const structureToRender = getStructureToRender(history, <UserBlock />, store);
    render(structureToRender);

    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });
});
