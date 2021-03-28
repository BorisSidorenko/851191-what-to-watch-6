import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {TAB_ITEMS} from '../../utils/constatns';

const MovieCardTab = ({tab, url, pathname}) => {
  const [defaultTab] = TAB_ITEMS;
  const [, requestedTab] = pathname.split(`${url}/`);
  const currentTab = requestedTab ? requestedTab : defaultTab.toLowerCase();

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

MovieCardTab.propTypes = {
  tab: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

export default MovieCardTab;
