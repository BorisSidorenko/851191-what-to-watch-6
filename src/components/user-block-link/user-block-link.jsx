import React from 'react';
import {Link} from 'react-router-dom';
import {RoutePaths} from '../../utils/constatns';

const UserBlockLink = () => (
  <Link to={RoutePaths.SIGN_IN} className="user-block__link">Sign in</Link>
);

export default UserBlockLink;
