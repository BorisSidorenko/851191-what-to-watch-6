import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import MovieCardOverview from '../movie-card-overview/movie-card-overview';
import MovieCardNavigation from '../movie-card-navigation/movie-card-navigation';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {RoutePaths, MovieCardNavigationItems} from '../../utils/constatns';
import {getSimilarMovies} from '../../utils/common';

const MoviePage = ({id, background_image: background, name, genre, ...rest}) => {
  const reviewPageLink = `${RoutePaths.MOVIE_PAGE}/${id}${RoutePaths.REVIEW}`;

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
                currentSection={MovieCardNavigationItems.OVERVIEW}
              />

              <MovieCardOverview
                {...rest}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog
          allMovies={getSimilarMovies(id, genre)}
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
  "id": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  "background_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "genre": PropTypes.string.isRequired
};

export default MoviePage;
