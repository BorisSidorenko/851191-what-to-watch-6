import React from 'react';
import {Link} from 'react-router-dom';
import {idProp, nameProp} from '../props/movie-props';

import {RoutePaths} from '../../utils/constatns';

const AddReviewBreadcrumbs = ({name, id}) => {
  const moviePage = `${RoutePaths.MOVIE_PAGE}/${id}`;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={moviePage} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

AddReviewBreadcrumbs.propTypes = {
  name: nameProp,
  id: idProp
};

export default AddReviewBreadcrumbs;
