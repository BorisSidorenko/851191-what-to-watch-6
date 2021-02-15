import React from 'react';
import PropTypes from 'prop-types';
import UserBlockAvatar from '../user-block-avatar/user-block-avatar';
import UserBlockLink from '../user-block-link/user-block-link';

const UserBlock = ({isUserAuthenticated}) => (
  <div className="user-block">
    {isUserAuthenticated ? <UserBlockAvatar /> : <UserBlockLink />}
  </div>
);

UserBlock.propTypes = {
  isUserAuthenticated: PropTypes.bool.isRequired
};

export default UserBlock;
