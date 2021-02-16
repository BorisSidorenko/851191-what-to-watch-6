import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {RoutePaths} from '../../utils/constatns';

const Logo = ({isLogoLight = false}) => (
  <div className="logo">
    <Link to={RoutePaths.MAIN} className={classNames(`logo__link `, {'logo__link--light': isLogoLight})}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

Logo.propTypes = {
  isLogoLight: PropTypes.bool
};

export default Logo;
