import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import {AuthorizationStatus} from '../../utils/constatns';
import MovieCardButtons from './movie-card-buttons';

describe(`MovieCardButtons render correctly`, () => {
  it(`Should MovieCardButtons render correctly when user is authtorized`, () => {
    const reviewPageLink = `/test`;
    const history = createMemoryHistory();

    const structureToRender = getStructureToRender(history, <MovieCardButtons reviewPageLink={reviewPageLink} />);
    render(structureToRender);

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Should MovieCardButtons render correctly when user is not authtorized`, () => {
    const reviewPageLink = `/test`;
    const history = createMemoryHistory();

    const mockStore = configureStore({});
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED
      },
      DATA: {
        selectedMovie: movieStructure
      }
    });

    const structureToRender = getStructureToRender(history, <MovieCardButtons reviewPageLink={reviewPageLink} />, store);
    render(structureToRender);

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.queryByText(/Add review/i)).not.toBeInTheDocument();
  });
});
