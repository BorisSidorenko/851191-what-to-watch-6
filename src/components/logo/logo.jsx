import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({isLogoLight}) => (
  <div className="logo">
    <a className={isLogoLight ? `logo__link logo__link--light` : `logo__link`}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </a>
  </div>
);

Logo.propTypes = {
  isLogoLight: PropTypes.bool.isRequired
};

export default Logo;
