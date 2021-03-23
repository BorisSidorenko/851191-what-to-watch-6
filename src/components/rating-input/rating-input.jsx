import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../utils/constatns';

const RatingInput = ({value, onRatingChange}) => {
  const starNumber = RATING_STARS[value];
  const inputId = `star-${starNumber}`;
  const labelValue = `Rating ${starNumber}`;

  return (
    <>
      <input onChange={onRatingChange} className="rating__input" id={inputId} type="radio" name="rating" value={starNumber} data-testid="rating"/>
      <label className="rating__label" htmlFor={inputId}>{labelValue}</label>
    </>
  );
};

RatingInput.propTypes = {
  value: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

export default memo(RatingInput);
