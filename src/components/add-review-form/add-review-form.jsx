import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../utils/constatns';

const RaitingInput = ({index, onRatingChange}) => {
  const starNumber = RATING_STARS[index];
  const inputId = `star-${starNumber}`;
  const labelValue = `Rating ${starNumber}`;

  return (
    <>
      <input onChange={onRatingChange} className="rating__input" id={inputId} type="radio" name="rating" value={starNumber}/>
      <label className="rating__label" htmlFor={inputId}>{labelValue}</label>
    </>
  );
};

const AddReviewForm = () => {
  const [reviewForm, setReviewForm] = useState({
    "rating": ``,
    "review-text": ``
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleUserInput = ({target}) => {
    const {name, value} = target;
    setReviewForm({...reviewForm, [name]: value});
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {RATING_STARS.map((item) => <RaitingInput key={`raiting-${item}`} index={item} onRatingChange={handleUserInput} />)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onBlur={handleUserInput} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

RaitingInput.propTypes = {
  index: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

export default AddReviewForm;
