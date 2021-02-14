import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import AddReviewForm from '../add-review-form/add-review-form';

import {generateMovie} from '../../mock/movie/movie';

const AddReview = ({match}) => {
  const movieId = match.params.id;
  const {background_image: background, name, poster_image: poster} = generateMovie(movieId);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          headerClassName="page-header"
          name={name}
          movieId={movieId}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={name} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
};

AddReview.propTypes = {
  match: PropTypes.object.isRequired
};

export default AddReview;
