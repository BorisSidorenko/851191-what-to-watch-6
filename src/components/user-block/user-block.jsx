import React from 'react';
import {useSelector} from 'react-redux';
import UserBlockAvatar from '../user-block-avatar/user-block-avatar';
import UserBlockLink from '../user-block-link/user-block-link';

const UserBlock = () => {
  const {isAuthtorized} = useSelector((state) => state.USER);

  return (
    <div className="user-block">
      {isAuthtorized ? <UserBlockAvatar /> : <UserBlockLink />}
    </div>
  );
};


export default UserBlock;
