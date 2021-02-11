import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

const Header = ({headerClassName, breadcrumbs, children, isUserAuthenticated, showUserBlock}) => (
  <header className={headerClassName}>
    <Logo />

    {breadcrumbs}

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
  breadcrumbs: PropTypes.element,
  children: PropTypes.node,
  showUserBlock: PropTypes.bool
};

export default Header;
