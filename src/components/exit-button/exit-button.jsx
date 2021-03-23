import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ExitButton = () => {
  const {requestedPlayerPath} = useSelector((state) => state.PLAYER);
  return <Link to={requestedPlayerPath} className="btn player__exit">Exit</Link>;
};

export default ExitButton;
