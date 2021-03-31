import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {RoutePaths} from '../../utils/constatns';

const getAvatarComponent = (avatar, name) => (
  <img src={avatar} alt={name} width="63" height="63" />
);

const UserBlockAvatar = ({location}) => {
  const {user} = useSelector((state) => state.USER);
  const {avatar_url: avatar, name} = user;
  const isMylistCurrent = location.pathname === RoutePaths.MY_LIST;

  return (
    <div className="user-block__avatar">
      {isMylistCurrent ? getAvatarComponent(avatar, name) : <Link to={RoutePaths.MY_LIST}>{getAvatarComponent(avatar, name)}</Link>}
    </div>
  );
};

UserBlockAvatar.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(UserBlockAvatar);
