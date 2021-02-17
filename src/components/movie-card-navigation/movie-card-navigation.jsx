import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MovieCardNavigationItems} from '../../utils/constatns';

const NavigationItem = ({title, currentSection}) => (
  <li className={classNames(`movie-nav__item`, {
    "movie-nav__item--active": title === currentSection
  })}>
    <a href="#" className="movie-nav__link">{title}</a>
  </li>
);

const MovieCardNavigation = ({currentSection}) => (
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {Object.values(MovieCardNavigationItems).map((item) => <NavigationItem key={`nav-${item}`} title={item} currentSection={currentSection} />)}
    </ul>
  </nav>
);

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  currentSection: PropTypes.string.isRequired
};

MovieCardNavigation.propTypes = {
  currentSection: PropTypes.string.isRequired
};

export default MovieCardNavigation;
