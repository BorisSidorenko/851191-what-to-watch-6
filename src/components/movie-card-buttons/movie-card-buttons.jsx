import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import MovieCardPlayButton from '../movie-card-play-button/movie-card-play-button';
import MovieCardAddToListButton from '../movie-card-add-to-list-button/movie-card-add-to-list-button';

const MovieCardButtons = ({reviewPageLink}) => {
  const {isAuthtorized} = useSelector((state) => state.USER);

  return (
    <div className="movie-card__buttons">
      <MovieCardPlayButton />
      <MovieCardAddToListButton />

      {isAuthtorized && reviewPageLink && <Link to={reviewPageLink} className="btn movie-card__button">Add review</Link> }

    </div>
  );
};

MovieCardButtons.propTypes = {
  reviewPageLink: PropTypes.string
};


export default memo(MovieCardButtons);
