import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Logo = ({isLogoLight = false}) => (
  <div className="logo">
    <a className={classNames(`logo__link `, {'logo__link--light': isLogoLight})}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </a>
  </div>
);

Logo.propTypes = {
  isLogoLight: PropTypes.bool
};

export default Logo;
