import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import AddReviewBreadcrumbs from '../add-review-breadcrumbs/add-review-breadcrumbs';
import {withRouter} from 'react-router-dom';
import {RoutePaths} from '../../utils/constatns';

const Header = ({name, movieId, children, match, location}) => {
  const {path, isExact} = match;

  const headerClass = classNames(`page-header`, {
    'movie-card__head': path === `${RoutePaths.MOVIE_PAGE}/:id` || path === RoutePaths.MAIN && isExact,
    'user-page__head': path === RoutePaths.MY_LIST || path === RoutePaths.SIGN_IN || !isExact
  });

  const isMoviePage = location.pathname === `${RoutePaths.MOVIE_PAGE}/${movieId}${RoutePaths.REVIEW}`;

  return (
    <header className={headerClass}>
      <Logo />

      {isMoviePage && <AddReviewBreadcrumbs name={name} id={movieId} />}

      <UserBlock />

      {children}
    </header>
  );
};


Header.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  name: PropTypes.string,
  movieId: PropTypes.number,
  children: PropTypes.node
};

export default withRouter(memo(Header));
