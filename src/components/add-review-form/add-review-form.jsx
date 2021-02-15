import React from 'react';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../utils/constatns';

const GetRaitingInputComponent = ({index}) => {
  const starNumber = RATING_STARS[index];
  const inputId = `star-${starNumber}`;
  const labelValue = `Rating ${starNumber}`;

  return (
    <>
      <input className="rating__input" id={inputId} type="radio" name="rating" value={starNumber}/>
      <label className="rating__label" htmlFor={inputId}>{labelValue}</label>
    </>
  );
};

const AddReviewForm = () => (
  <div className="add-review">
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array(RATING_STARS.length).fill().map((el, i) => <GetRaitingInputComponent key={i} index={i}/>)};
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  </div>
);

GetRaitingInputComponent.propTypes = {
  index: PropTypes.number.isRequired
};

export default AddReviewForm;
