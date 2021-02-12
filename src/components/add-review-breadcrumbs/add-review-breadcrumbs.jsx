import React from 'react';
import PropTypes from 'prop-types';

import {RoutePaths} from '../../utils/constatns';

const AddReviewBreadcrumbs = ({name, id}) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <a href={`${RoutePaths.MOVIE_PAGE}/${id}`} className="breadcrumbs__link">{name}</a>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  </nav>
);

AddReviewBreadcrumbs.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default AddReviewBreadcrumbs;
