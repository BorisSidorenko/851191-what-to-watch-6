import React, {memo} from 'react';
import Logo from '../logo/logo';

const Footer = () => (
  <footer className="page-footer">
    <Logo
      isLogoLight={true}
    />

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default memo(Footer);
