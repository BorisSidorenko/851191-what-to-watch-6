import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {movieStructure} from '../../data-structure';
import {AuthorizationStatus} from '../../utils/constatns';
import MovieCardButtons from './movie-card-buttons';

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

describe(`MovieCardButtons render correctly`, () => {
  it(`Should MovieCardButtons render correctly when user is authtorized`, () => {
    const reviewPageLink = `/test`;
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.AUTHORIZED
      },
      DATA: {
        selectedMovie: movieStructure
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MovieCardButtons reviewPageLink={reviewPageLink}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Play`)).toBeInTheDocument();
    expect(screen.getByText(`My list`)).toBeInTheDocument();
    expect(screen.getByText(`Add review`)).toBeInTheDocument();
  });

  it(`Should MovieCardButtons render correctly when user is not authtorized`, () => {
    const reviewPageLink = `/test`;
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED
      },
      DATA: {
        selectedMovie: movieStructure
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MovieCardButtons reviewPageLink={reviewPageLink}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Play`)).toBeInTheDocument();
    expect(screen.getByText(`My list`)).toBeInTheDocument();
    expect(screen.queryByText(`Add review`)).not.toBeInTheDocument();
  });
});
