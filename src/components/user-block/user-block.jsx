import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserBlockAvatar from '../user-block-avatar/user-block-avatar';
import UserBlockLink from '../user-block-link/user-block-link';
import {getIsAuthtorizedFlag} from '../../store/user/selectors';

const UserBlock = ({isAuthtorized}) => (
  <div className="user-block">
    {isAuthtorized ? <UserBlockAvatar /> : <UserBlockLink />}
  </div>
);

UserBlock.propTypes = {
  isAuthtorized: PropTypes.bool
};

const mapStateToProps = (state) => ({isAuthtorized: getIsAuthtorizedFlag(state)});

export default connect(mapStateToProps)(UserBlock);
