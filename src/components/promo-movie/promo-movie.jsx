
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import PromoMovieInfo from '../promo-movie-info/promo-movie';

const PromoMovie = ({background_image: background, name, ...rest}) => (
  <section className="movie-card">
    <div className="movie-card__bg">
      <img src={background} alt={name} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <Header />

    <div className="movie-card__wrap">
      <PromoMovieInfo
        name = {name}
        {...rest}
      />
    </div>
  </section>
);

PromoMovie.propTypes = {
  "background_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired
};

export default PromoMovie;
