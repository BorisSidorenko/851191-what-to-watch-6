import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {NAVIGATION_ITEMS} from '../../utils/constatns';
import MovieCardTab from '../movie-card-tab/movie-card-tab';

const MovieCardNavigation = ({url, pathname}) => (
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {NAVIGATION_ITEMS.map((item) => <MovieCardTab key={`nav-${item}`} tab={item} url={url} pathname={pathname} />)}
    </ul>
  </nav>
);

MovieCardNavigation.propTypes = {
  url: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

export default memo(MovieCardNavigation);
