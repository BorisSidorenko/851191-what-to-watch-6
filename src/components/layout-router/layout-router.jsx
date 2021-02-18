import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import {Switch, Route} from 'react-router-dom';
import {RoutePaths} from '../../utils/constatns';

const LayoutRouter = ({currentMovie, allMovies}) => (
  <Switch>
    <Route exact path={RoutePaths.MAIN}>
      <Main
        promoMovie={currentMovie}
        allMovies={allMovies}
      />
    </Route>
    <Route exact path={RoutePaths.SIGN_IN}>
      <SignIn />
    </Route>
    <Route exact path={RoutePaths.MY_LIST}>
      <MyList allMovies={allMovies} />
    </Route>
    <Route path={`${RoutePaths.MOVIE_PAGE}/:id`}
      render={(routeProps) => (
        <MoviePage
          {...routeProps}
        />
      )}
    />
    <Route exact path={`${RoutePaths.MOVIE_PAGE}/:id${RoutePaths.REVIEW}`}
      render={(routeProps) => (
        <AddReview
          {...routeProps}
        />
      )}
    />
    <Route exact path={`${RoutePaths.PLAYER}/:id`}
      render={(routeProps) => (
        <Player
          {...routeProps}
          selectedMovie={currentMovie}
        />
      )}
    />
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

LayoutRouter.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  allMovies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LayoutRouter;
