import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import NotFound from '../not-found/not-found';
import VideoPlayer from '../video-player/video-player';
import {movieProp} from '../props/movie-props';
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
    <Route exact path={`${RoutePaths.MOVIE_PAGE}/:id${RoutePaths.REVIEW}`}
      render={(routeProps) => (
        <AddReview
          {...routeProps}
        />
      )}
    />
    <Route path={`${RoutePaths.MOVIE_PAGE}/:id`}
      render={(routeProps) => (
        <MoviePage
          {...routeProps}
        />
      )}
    />
    <Route exact path={`${RoutePaths.PLAYER}/:id`}
      render={({match}) => (
        <VideoPlayer
          movieId={match.params.id}
        />
      )}
    />
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

LayoutRouter.propTypes = {
  currentMovie: movieProp,
  allMovies: PropTypes.arrayOf(movieProp).isRequired
};

export default LayoutRouter;
