import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {movieProp} from '../props/movie-props';
import Header from '../header/header';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import MovieCardNavigation from '../movie-card-navigation/movie-card-navigation';
import MovieCardOverview from '../movie-card-overview/movie-card-overview';
import MovieCardReviews from '../movie-card-reviews/movie-card-reviews';
import MovieCardDetails from '../movie-card-details/movie-card-details';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {RoutePaths} from '../../utils/constatns';
import {getRandomInt} from '../../utils/common';
import {loadMovieById} from '../../api/api-actions';
import {ActionCreator} from '../../store/action';
import Loading from '../loading/loading';
import Reviews from '../../mocks/reviews';

const getMovieCardDescComponent = (selectedMovie, reviewPageLink) => (
  <MovieCardDescription {...selectedMovie}>
    <MovieCardButtons>
      <Link to={reviewPageLink} className="btn movie-card__button">Add review</Link>
    </MovieCardButtons>
  </MovieCardDescription>
);

const MoviePage = ({selectedMovie, match, location, onLoadData, onClearData}) => {
  const reviewPageLink = `${match.url}${RoutePaths.REVIEW}`;
  const reviews = Reviews.slice(0, getRandomInt(Reviews.length));

  useEffect(() => {
    if (selectedMovie) {
      onClearData();
    }

    onLoadData(match.params.id);

  }, [match.params.id]);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            {!selectedMovie ? <Loading /> : <img src={selectedMovie.background_image} alt={selectedMovie.name} />}
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            {!selectedMovie ? <Loading /> : getMovieCardDescComponent(selectedMovie, reviewPageLink)}
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              {!selectedMovie ? <Loading /> : <img src={selectedMovie.poster_image} alt={selectedMovie.name} width="218" height="327" />}
            </div>

            <div className="movie-card__desc">
              <MovieCardNavigation
                url={match.url}
                pathname={location.pathname}
              />

              <Switch>
                <Route exact path={`${match.path}${RoutePaths.MOVIE_REVIEWS}`}>
                  <MovieCardReviews reviews = {reviews}/>
                </Route>
                <Route exact path={`${match.path}${RoutePaths.MOVIE_DETAILS}`}>
                  {!selectedMovie ? <Loading/> : <MovieCardDetails {...selectedMovie} />}
                </Route>
                <Route exact path={match.path}>
                  {!selectedMovie ? <Loading/> : <MovieCardOverview {...selectedMovie} />}
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
        >
          <h2 className="catalog__title">More like this</h2>
        </Catalog>

        <Footer />
      </div>
    </>
  );
};

MoviePage.propTypes = {
  selectedMovie: movieProp,
  onLoadData: PropTypes.func.isRequired,
  onClearData: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({selectedMovie}) => ({
  selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(loadMovieById(id));
  },
  onClearData() {
    dispatch(ActionCreator.clearSelectedMovie());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
