import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {RatingStars} from '../../utils/constatns';

const getRaitingInputComponent = (i) => {
  const starNumber = RatingStars.MIN + i;
  const labelValue = `Rating ${starNumber}`;
  const [id] = React.useState(uuidv4);

  return (
    <React.Fragment key={id}>
      <input className="rating__input" id={`star-${starNumber}`} type="radio" name="rating" value={starNumber}/>
      <label className="rating__label" htmlFor={`star-${starNumber}`}>{labelValue}</label>
    </React.Fragment>
  );
};

const AddReviewForm = () => (
  <div className="add-review">
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array(RatingStars.MAX).fill().map((el, i) => getRaitingInputComponent(i))}
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

export default AddReviewForm;
