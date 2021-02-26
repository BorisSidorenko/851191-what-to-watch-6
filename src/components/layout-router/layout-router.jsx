import React from 'react';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import NotFound from '../not-found/not-found';
import VideoPlayer from '../video-player/video-player';
import {Switch, Route} from 'react-router-dom';
import {RoutePaths} from '../../utils/constatns';

const LayoutRouter = () => (
  <Switch>
    <Route exact path={RoutePaths.MAIN}>
      <Main />
    </Route>
    <Route exact path={RoutePaths.SIGN_IN}>
      <SignIn />
    </Route>
    <Route exact path={RoutePaths.MY_LIST}>
      <MyList />
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

export default LayoutRouter;
