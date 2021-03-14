import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {idProp, backgroundImageProp, nameProp, posterProp, genreProp, releasedProp, directorProp, starringProp, runTimeProp, ratingProp, descriptionProp, scoresCountProp} from '../props/movie-props';
import {reviewProp} from '../props/review-prop';
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
import {ActionCreator} from '../../store/action';
import Loading from '../loading/loading';

const MoviePage = ({movie, selectedMovieReviews, match, location, onLoadDataMovie, onClearData, setSelectedMovie, redirectToNotFound, onLoadMovieReviews, loadMovieReviews}) => {
  const reviewPageLink = `${match.url}${RoutePaths.REVIEW}`;
  const {id} = match.params;

  useEffect(() => {
    if (movie && movie.id !== id) {
      onClearData();
    }

    onLoadDataMovie(id)
      .then(({data}) => setSelectedMovie(data))
      .catch(() => redirectToNotFound());

    onLoadMovieReviews(id)
      .then(({data}) => loadMovieReviews(data));

  }, [id]);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            {movie ? <img src={movie.backgroundImage} alt={movie.name} /> : <Loading />}
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            {movie ? <MovieCardDescription name={movie.name} genre={movie.genre} released={movie.released} reviewPageLink={reviewPageLink} /> : <Loading />}
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              {movie ? <img src={movie.poster} alt={movie.name} width="218" height="327" /> : <Loading />}
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
                  {movie ? <MovieCardDetails {...movie} /> : <Loading/>}
                </Route>
                <Route exact path={match.path}>
                  {movie ? <MovieCardOverview {...movie} /> : <Loading/>}
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
  movie: PropTypes.shape({
    id: idProp,
    backgroundImage: backgroundImageProp,
    name: nameProp,
    poster: posterProp,
    genre: genreProp,
    released: releasedProp,
    director: directorProp,
    starring: starringProp,
    duration: runTimeProp,
    rating: ratingProp,
    description: descriptionProp,
    score: scoresCountProp
  }),
  selectedMovieReviews: PropTypes.arrayOf(reviewProp),
  onLoadDataMovie: PropTypes.func.isRequired,
  onClearData: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  redirectToNotFound: PropTypes.func.isRequired,
  onLoadMovieReviews: PropTypes.func.isRequired,
  loadMovieReviews: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({selectedMovie, selectedMovieReviews}) => {
  const movie = selectedMovie ? {
    id: selectedMovie.id,
    backgroundImage: selectedMovie.background_image,
    name: selectedMovie.name,
    poster: selectedMovie.poster_image,
    genre: selectedMovie.genre,
    released: selectedMovie.released,
    director: selectedMovie.director,
    starring: selectedMovie.starring,
    duration: selectedMovie.run_time,
    rating: selectedMovie.rating,
    description: selectedMovie.description,
    score: selectedMovie.scores_count
  } : selectedMovie;

  return ({
    movie,
    selectedMovieReviews
  });
};

const mapDispatchToProps = (dispatch) => ({
  onLoadDataMovie(id) {
    return dispatch(loadMovieById(id));
  },
  onClearData() {
    dispatch(ActionCreator.clearSelectedMovie());
    dispatch(ActionCreator.clearSelectedMovieReviews());
  },
  setSelectedMovie(data) {
    dispatch(ActionCreator.loadMovieById(data));
  },
  redirectToNotFound() {
    dispatch(ActionCreator.redirectToRoute(RoutePaths.NOT_FOUND));
  },
  onLoadMovieReviews(id) {
    return dispatch(loadReviewsByMovieId(id));
  },
  loadMovieReviews(data) {
    dispatch(ActionCreator.loadReviewsByMovieId(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
