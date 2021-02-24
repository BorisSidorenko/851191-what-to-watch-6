import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import AddReviewForm from '../add-review-form/add-review-form';
import {getMovieById} from '../../utils/common';

const AddReview = ({match}) => {
  const {id, background_image: background, name, poster_image: poster} = getMovieById(match.params.id);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          name={name}
          movieId={id}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
};

AddReview.propTypes = {
  match: PropTypes.object.isRequired
};


export default AddReview;
