import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import MovieCardOverview from '../movie-card-overview/movie-card-overview';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {RoutePaths} from '../../utils/constatns';
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
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

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
  "id": PropTypes.number.isRequired,
  "background_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "genre": PropTypes.string.isRequired
};

export default MoviePage;
