import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NAVIGATION_ITEMS = [`Overview`, `Details`, `Reviews`];

const NavigationItem = ({tab, url, pathname}) => {
  const [defaultTab] = NAVIGATION_ITEMS;
  const currentTab = url === pathname ? defaultTab.toLowerCase() : pathname.replace(`${url}/`, ``);

  return (
    <li className={classNames(`movie-nav__item`, {
      "movie-nav__item--active": currentTab === tab.toLowerCase()
    })}>
      {currentTab === tab.toLowerCase() ?
        <span className="movie-nav__link">{tab}</span>
        : <NavLink to={tab === defaultTab ? `${url}` : `${url}/${tab.toLowerCase()}`} className="movie-nav__link">{tab}</NavLink>
      }
    </li>
  );
};

const MovieCardNavigation = ({url, pathname}) => (
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {NAVIGATION_ITEMS.map((item) => <NavigationItem key={`nav-${item}`} tab={item} url={url} pathname={pathname} />)}
    </ul>
  </nav>
);

NavigationItem.propTypes = {
  tab: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

MovieCardNavigation.propTypes = {
  url: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

export default MovieCardNavigation;
