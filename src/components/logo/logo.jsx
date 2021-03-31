import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {RoutePaths} from '../../utils/constatns';

const getLogoComponent = () => (
  <>
    <span className="logo__letter logo__letter--1">W</span>
    <span className="logo__letter logo__letter--2">T</span>
    <span className="logo__letter logo__letter--3">W</span>
  </>
);

const Logo = ({isLogoLight = false, location}) => {
  const logoClassNames = classNames(`logo__link `, {'logo__link--light': isLogoLight});
  const isMainPage = location.pathname === RoutePaths.MAIN;

  return (
    <div className="logo">
      {isMainPage ? <div className={logoClassNames}>{getLogoComponent()}</div> : <Link to={RoutePaths.MAIN} className={logoClassNames}>{getLogoComponent()}</Link>}
    </div>
  );
};

Logo.propTypes = {
  location: PropTypes.object.isRequired,
  isLogoLight: PropTypes.bool
};

export default withRouter(Logo);
