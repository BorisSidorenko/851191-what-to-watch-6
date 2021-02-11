import React from 'react';
import PropTypes from 'prop-types';

const AddReviewBreadcrumbs = ({name}) => (
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
);

AddReviewBreadcrumbs.propTypes = {
  name: PropTypes.string.isRequired
};

export default AddReviewBreadcrumbs;
