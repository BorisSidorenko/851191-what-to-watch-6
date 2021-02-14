import React from 'react';
import Startup from '../startup/startup';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import {Switch, Route} from 'react-router-dom';
import {RoutePaths} from '../../utils/constatns';

const LayoutRouter = (props) => (
  <Switch>
    <Route exact path={RoutePaths.INDEX}>
      <Startup {...props} />
    </Route>
    <Route exact path={RoutePaths.SIGN_IN}>
      <SignIn />
    </Route>
    <Route exact path={RoutePaths.MY_LIST}>
      <MyList {...props} />
    </Route>
    <Route exact path={`${RoutePaths.MOVIE_PAGE}/:id`} component={MoviePage}/>
    <Route exact path={`${RoutePaths.MOVIE_PAGE}/:id${RoutePaths.REVIEW}`} component={AddReview}/>
    <Route exact path={`${RoutePaths.PLAYER}/:id`}
      render={(routeProps) => (
        <Player
          {...props}
          {...routeProps}
        />
      )}
    />
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default LayoutRouter;
