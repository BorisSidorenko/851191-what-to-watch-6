import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import MovieCardNavigation from '../movie-card-navigation/movie-card-navigation';
import MovieCardOverview from '../movie-card-overview/movie-card-overview';
import MovieCardReviews from '../movie-card-reviews/movie-card-reviews';
import MovieCardDetails from '../movie-card-details/movie-card-details';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {RoutePaths} from '../../utils/constatns';
import {loadMovieById, loadReviewsByMovieId} from '../../api/api-actions';
import {loadMovieByIdAction, loadReviewsByMovieIdAction, clearSelectedMovieAction} from '../../store/data/action';
import {redirectToRouteAction} from '../../store/user/action';
import Loading from '../loading/loading';

const MoviePage = ({match, location}) => {
  const {selectedMovie, selectedMovieReviews} = useSelector((state) => state.DATA);
  const reviewPageLink = `${match.url}${RoutePaths.REVIEW}`;
  const {id} = match.params;
  const movieId = parseInt(id, 10);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedMovie && selectedMovie.id !== movieId) {
      dispatch(clearSelectedMovieAction());
    }

    dispatch(loadMovieById(movieId))
      .then(({data}) => dispatch(loadMovieByIdAction(data)))
      .catch(() => dispatch(redirectToRouteAction(RoutePaths.NOT_FOUND)));

    dispatch(loadReviewsByMovieId(movieId))
      .then(({data}) => dispatch(loadReviewsByMovieIdAction(data)));

  }, [movieId]);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            {selectedMovie ? <img src={selectedMovie.background_image} alt={selectedMovie.name} /> : <Loading />}
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            {selectedMovie ? <MovieCardDescription name={selectedMovie.name} genre={selectedMovie.genre} released={selectedMovie.released} reviewPageLink={reviewPageLink} /> : <Loading />}
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              {selectedMovie ? <img src={selectedMovie.poster_image} alt={selectedMovie.name} width="218" height="327" /> : <Loading />}
            </div>

            <div className="movie-card__desc">
              <MovieCardNavigation
                url={match.url}
                pathname={location.pathname}
              />

              <Switch>
                <Route exact path={`${match.path}${RoutePaths.MOVIE_REVIEWS}`}>
                  <MovieCardReviews reviews = {selectedMovieReviews}/>
                </Route>
                <Route exact path={`${match.path}${RoutePaths.MOVIE_DETAILS}`}>
                  {selectedMovie ? <MovieCardDetails {...selectedMovie} /> : <Loading/>}
                </Route>
                <Route exact path={match.path}>
                  {selectedMovie ? <MovieCardOverview {...selectedMovie} /> : <Loading/>}
                </Route>
              </Switch>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog
          showGenres={false}
          shwoButton={false}
          catalogClass = "catalog catalog--like-this"
        />

        <Footer />
      </div>
    </>
  );
};

MoviePage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default MoviePage;
