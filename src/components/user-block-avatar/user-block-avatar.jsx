import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {RoutePaths} from '../../utils/constatns';
import {getUser} from '../../store/user/selectors';

const getAvatarComponent = (avatar, name) => (
  <img src={avatar} alt={name} width="63" height="63" />
);

const UserBlockAvatar = ({avatar, name, location}) => {
  const isMylistCurrent = location.pathname === RoutePaths.MY_LIST;

  return (
    <div className="user-block__avatar">
      {isMylistCurrent ? getAvatarComponent(avatar, name) : <Link to={RoutePaths.MY_LIST}>{getAvatarComponent(avatar, name)}</Link>}
    </div>
  );
};

UserBlockAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const user = getUser(state);

  return ({
    avatar: user.avatar_url,
    name: user.name
  });
};

export default withRouter(connect(mapStateToProps)(UserBlockAvatar));
