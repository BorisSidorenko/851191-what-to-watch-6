import React from 'react';
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
import {getMovieById, getRandomInt} from '../../utils/common';
import Reviews from '../../mocks/reviews';

const MoviePage = ({movies, match, location}) => {
  const {background_image: background, name, genre, ...rest} = getMovieById(movies, match.params.id);
  const reviewPageLink = `${match.url}${RoutePaths.REVIEW}`;
  const reviews = Reviews.slice(0, getRandomInt(Reviews.length));

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <MovieCardDescription
              name={name}
              genre={genre}
              {...rest}
            >
              <MovieCardButtons>
                <Link to={reviewPageLink} className="btn movie-card__button">Add review</Link>
              </MovieCardButtons>
            </MovieCardDescription>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <MovieCardNavigation
                url={match.url}
                pathname={location.pathname}
              />

              <Switch>
                <Route exact path={`${match.path}${RoutePaths.MOVIE_REVIEWS}`}>
                  <MovieCardReviews
                    reviews = {reviews}
                  />
                </Route>
                <Route exact path={`${match.path}${RoutePaths.MOVIE_DETAILS}`}>
                  <MovieCardDetails
                    genre={genre}
                    {...rest}
                  />
                </Route>
                <Route exact path={match.path}>
                  <MovieCardOverview
                    {...rest}
                  />
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
  movies: PropTypes.arrayOf(movieProp),
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({movies}) => ({
  movies
});

export default connect(mapStateToProps)(MoviePage);
