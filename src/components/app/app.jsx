import React from 'react';
import Startup from '../startup/startup';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import NotFound from '../not-found/not-found';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Startup {...props} />
      </Route>
      <Route exact path="/login">
        <SignIn />
      </Route>
      <Route exact path="/mylist">
        <MyList {...props} />
      </Route>
      <Route exact path="/films/:id" component={MoviePage}/>
      <Route exact path="/films/:id/review" component={AddReview}/>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
