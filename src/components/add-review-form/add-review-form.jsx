import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../utils/constatns';
import {addReview} from '../../api/api-actions';
import {idProp} from '../../components/props/movie-props';

const COMMENT_LENGTH_MIN = 50;
const COMMENT_LENGTH_MAX = 400;

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

const AddReviewForm = ({id, onSubmit}) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [reviewForm, setReviewForm] = useState({
    rating: ``,
    comment: ``
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    setIsSubmitDisabled(true);

    onSubmit(id, reviewForm);
  };

  const handleUserInput = ({target}) => {
    const {name, value} = target;
    setReviewForm({...reviewForm, [name]: value});
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {RATING_STARS.map((item, index) => <RaitingInput key={`raiting-${item}`} index={index} onRatingChange={handleUserInput} />)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleUserInput} className="add-review__textarea" name="comment" id="review-text" placeholder="Review text" required minLength={COMMENT_LENGTH_MIN} maxLength={COMMENT_LENGTH_MAX}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}>Post</button>
        </div>

      </div>
    </form>
  );
};

RaitingInput.propTypes = {
  index: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

AddReviewForm.propTypes = {
  id: idProp,
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, data) {
    dispatch(addReview(id, data));
  }
});

export default connect(null, mapDispatchToProps)(AddReviewForm);
