import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import AddReviewForm from '../add-review-form/add-review-form';

const AddReview = ({background_image: background, name, poster_image: poster}) => (
  <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src={background} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        headerClassName = "page-header"
      >
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="movie-page.html" className="breadcrumbs__link">{name}</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>

      </Header>

      <div className="movie-card__poster movie-card__poster--small">
        <img src={poster} alt={name} width="218" height="327" />
      </div>
    </div>

    <AddReviewForm />

  </section>
);

AddReview.propTypes = {
  "background_image": PropTypes.string.isRequired,
  "poster_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired
};

export default AddReview;
