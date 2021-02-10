import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

const Header = ({headerClassName, children, isUserAuthenticated}) => (
  <header className={headerClassName}>
    <Logo />
    <UserBlock
      isUserAuthenticated = {isUserAuthenticated}
    />
    {children}
  </header>
);

Header.defaultProps = {
  isUserAuthenticated: true
};

Header.propTypes = {
  headerClassName: PropTypes.string.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default Header;
