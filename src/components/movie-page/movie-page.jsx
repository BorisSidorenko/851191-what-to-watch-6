import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import MovieCardDetails from '../movie-card-details/movie-card-details';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

const MoviePage = ({movie, similarMovies}) => (
  <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          headerClassName = "page-header movie-card__head"
        />

        <div className="movie-card__wrap">
          <MovieCardDescription>
            <MovieCardButtons>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
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

            <MovieCardDetails
              {...movie}
            />
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <Catalog
        allMovies = {similarMovies}
        catalogClass = "catalog catalog--like-this"
      >
        <h2 className="catalog__title">More like this</h2>
      </Catalog>

      <Footer />
    </div>
  </>
);

MoviePage.propTypes = {
  movie: PropTypes.object.isRequired,
  similarMovies: PropTypes.array.isRequired
};

export default MoviePage;
