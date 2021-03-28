import React from 'react';
import {AuthorizationStatus} from '../../utils/constatns';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {RoutePaths} from '../../utils/constatns';
import {movieStructure, authInfoStructure, getStructureToRender} from '../../utils/test-utils';
import Header from './header';

describe(`Header should render correctly`, () => {
  it(`Should Header render correctly if user is authorized`, () => {
    const {id, name} = movieStructure;

    const history = createMemoryHistory();
    history.push(`${RoutePaths.MOVIE_PAGE}/${id}${RoutePaths.REVIEW}`);

    const structureToRender = getStructureToRender(history, <Header name={name} movieId={id} />);
    render(structureToRender);

    expect(screen.getAllByRole(`link`).map((el) => el.lastChild.nodeName)).toContain(`IMG`, `SPAN`);
  });

  it(`Should Header render correctly if user is authorized and has children`, () => {
    const {id, name} = movieStructure;

    const history = createMemoryHistory();
    const title = `Test title`;

    const structureToRender = getStructureToRender(
        history,
        <Header name={name} movieId={id}>
          <h2>{title}</h2>
        </Header>
    );
    render(structureToRender);

    expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it(`Should Header render correctly if user is authorized and it's movie page`, () => {
    const {id, name} = movieStructure;

    const history = createMemoryHistory();
    history.location.pathname = `${RoutePaths.MOVIE_PAGE}/${id}${RoutePaths.REVIEW}`;

    const structureToRender = getStructureToRender(history, <Header name={name} movieId={id}/>);
    render(structureToRender);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();
  });

  it(`Should Header render correctly if user is not authorized`, () => {
    const {id, name} = movieStructure;
    const history = createMemoryHistory();

    const mockStore = configureStore({});
    const store = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED,
        user: authInfoStructure
      }
    });

    const structureToRender = getStructureToRender(history, <Header name={name} movieId={id}/>, store);
    render(structureToRender);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
