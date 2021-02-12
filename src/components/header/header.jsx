import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import AddReviewBreadcrumbs from '../add-review-breadcrumbs/add-review-breadcrumbs';
import {withRouter} from 'react-router-dom';

import {RoutePaths} from '../../utils/constatns';

const Header = ({headerClassName, name, movieId, children, isUserAuthenticated, showUserBlock, match}) => (
  <header className={headerClassName}>
    <Logo />

    {match.path === `${RoutePaths.MOVIE_PAGE}/:id${RoutePaths.REVIEW}` && <AddReviewBreadcrumbs name = {name} id = {movieId}/>}

    {showUserBlock && <UserBlock isUserAuthenticated = {isUserAuthenticated} />}

    {children}
  </header>
);

Header.defaultProps = {
  isUserAuthenticated: true,
  showUserBlock: true
};

Header.propTypes = {
  headerClassName: PropTypes.string.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  name: PropTypes.string,
  movieId: PropTypes.string,
  children: PropTypes.node,
  showUserBlock: PropTypes.bool
};

export default withRouter(Header);
